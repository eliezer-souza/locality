import { Order } from 'domain/order/entities/order.entity';
import { Email } from 'domain/order/value-objects/email.value-object';

describe('test of entity order', () => {
  it('should be create order with success', () => {
    const recipientEmail = new Email('bjorn@vikings.com');
    const order = new Order(
      '001',
      'steel ax delivery',
      recipientEmail,
      new Date('2019-07-02'),
      new Date('2019-07-02'),
    );

    expect(order.isValid()).toBe(true);
  });

  it('should not successfully create order because of email that is wrong', () => {
    const recipientEmail = new Email('emailwitherror');
    const order = new Order(
      '001',
      'steel ax delivery',
      recipientEmail,
      new Date('2019-07-02'),
      new Date('2019-07-02'),
    );

    expect(order.isValid()).toBe(false);
  });

  it('should not successfully create the order because the code is larger than the maximum length of 15 characters', () => {
    const recipientEmail = new Email('bjorn@vikings.com');
    const order = new Order(
      '12345678910111213',
      'steel ax delivery',
      recipientEmail,
      new Date('2019-07-02'),
      new Date('2019-07-02'),
    );

    expect(order.isValid()).toBe(false);
  });

  it('should not successfully create the order because the description is larger than the maximum length of 25 characters', () => {
    const recipientEmail = new Email('bjorn@vikings.com');
    const order = new Order(
      '001',
      'abcdefghijklmnopqrstuvwxyz',
      recipientEmail,
      new Date('2019-07-02'),
      new Date('2019-07-02'),
    );

    expect(order.isValid()).toBe(false);
  });

  it('should not successfully create order because of dateExpectedDelivery that is wrong', () => {
    const recipientEmail = new Email('bjorn@vikings.com');
    const order = new Order(
      '001',
      'abcdefghijklmnopqrstuvwxyz',
      recipientEmail,
      new Date('foobar'),
      new Date('2019-07-02'),
    );

    expect(order.isValid()).toBe(false);
  });

  it('should not successfully create order because of dateDelivery that is wrong', () => {
    const recipientEmail = new Email('bjorn@vikings.com');
    const order = new Order(
      '001',
      'abcdefghijklmnopqrstuvwxyz',
      recipientEmail,
      new Date('2019-07-02'),
      new Date('foobar'),
    );

    expect(order.isValid()).toBe(false);
  });
});
