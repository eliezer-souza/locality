import { CreateOrderCommand } from 'domain/order/commands/create-order.command';
import { Order } from 'domain/order/entities/order.entity';
import { IOrderCommandHandler } from 'domain/order/handlers/commands/iorder-command-handler.interface';
import { IOrderRepository } from 'domain/order/repositories/iorder.repository';
import { Email } from 'domain/order/value-objects/email.value-object';
import { Status } from 'domain/order/value-objects/status.value-object';
import { Identifier } from 'infra/cross-cutting/identifiers';
import { CommandResult } from 'shared/interfaces/command-result';
import { IResponse } from 'shared/interfaces/response';
import { IEmailService } from 'shared/services/iemail.service';
import { IQRCodeService } from 'shared/services/iqrcode.service';
import { autoInjectable, inject, singleton } from 'tsyringe';

@singleton()
@autoInjectable()
export class OrderCommandHandler implements IOrderCommandHandler {
  private readonly _orderRepository: IOrderRepository;
  private readonly _emailService: IEmailService;
  private readonly _qrcodeService: IQRCodeService;

  constructor(
    @inject(Identifier.ORDER_REPOSITORY)
    private orderRepository?: IOrderRepository,

    @inject(Identifier.EMAIL_SERVICE)
    private emailService?: IEmailService,

    @inject(Identifier.QRCODE_SERVICE)
    private qrcodeService?: IQRCodeService,
  ) {
    this._orderRepository = orderRepository;
    this._emailService = emailService;
    this._qrcodeService = qrcodeService;
  }

  public async createOrderHandle(
    command: CreateOrderCommand,
  ): Promise<IResponse> {
    const recipientEmail = new Email(command.recipientEmail);
    const status = new Status(command.status);

    const order = new Order(
      command.code,
      command.description,
      recipientEmail,
      command.deliveryDate,
      status,
    );

    if (!order.isValid()) {
      return new CommandResult(false, order.notifications.message.join(', '));
    }

    const response = await this._orderRepository.createOrder(order.json());

    if (!response.success) {
      return new CommandResult(false, response.message);
    }

    if (process.env.SEND_EMAIL === 'true') {
      const baseUrl = process.env.BASE_URL_APP;
      const qrcode = await this._qrcodeService.generate(
        `${baseUrl}${Object.values(response.data)}`,
      );

      await this._emailService.send(
        command.recipientEmail,
        'no-reply@locality.com.br',
        'Locality - Pedido cadastrado',
        'created-order',
        { ...response.data, qrcode },
      );
    }

    return new CommandResult(true, response.message, response.data);
  }
}
