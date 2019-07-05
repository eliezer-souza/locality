import { Order } from 'domain/order/entities/order.entity';
import { Email } from 'domain/order/value-objects/email.value-object';
import { Status } from 'domain/order/value-objects/status.value-object';

describe('test of entity order', () => {
  it('should be create order with success', () => {
    const recipientEmail = new Email('bjorn@vikings.com');
    const status = new Status('progress');

    const order = new Order(
      '001',
      'steel ax delivery',
      recipientEmail,
      new Date('2019-07-02'),
      status,
    );

    expect(order.isValid()).toBe(true);
  });

  it('should not successfully create order because of email that is wrong', () => {
    const recipientEmail = new Email('emailwitherror');
    const status = new Status('progress');

    const order = new Order(
      '001',
      'steel ax delivery',
      recipientEmail,
      new Date('2019-07-02'),
      status,
    );

    expect(order.isValid()).toBe(false);
  });

  it('should not successfully create the order because the code is larger than the maximum length of 15 characters', () => {
    const recipientEmail = new Email('bjorn@vikings.com');
    const status = new Status('progress');

    const order = new Order(
      '12345678910111213',
      'steel ax delivery',
      recipientEmail,
      new Date('2019-07-02'),
      status,
    );

    expect(order.isValid()).toBe(false);
  });

  it('should not successfully create the order because the description is larger than the maximum length of 25 characters', () => {
    const recipientEmail = new Email('bjorn@vikings.com');
    const status = new Status('progress');

    const order = new Order(
      '001',
      'abcdefghijklmnopqrstuvwxyz',
      recipientEmail,
      new Date('2019-07-02'),
      status,
    );

    expect(order.isValid()).toBe(false);
  });

  it('should not successfully create order because of deliveryDate that is wrong', () => {
    const recipientEmail = new Email('bjorn@vikings.com');
    const status = new Status('progress');

    const order = new Order(
      '001',
      'abcdefghijklmnopqrstuvwxyz',
      recipientEmail,
      new Date('foobar'),
      status,
    );

    expect(order.isValid()).toBe(false);
  });

  it('should not successfully create order because of status that is wrong', () => {
    const recipientEmail = new Email('bjorn@vikings.com');
    const status = new Status('statuswitherror');

    const order = new Order(
      '001',
      'abcdefghijklmnopqrstuvwxyz',
      recipientEmail,
      new Date('foobar'),
      status,
    );

    expect(order.isValid()).toBe(false);
  });
});
