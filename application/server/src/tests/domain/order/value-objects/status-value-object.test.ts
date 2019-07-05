import { Status } from 'domain/order/value-objects/status.value-object';

describe('Test of ValueObject of Status', () => {
  it('should be create a status of type "progress" with success', () => {
    const status = new Status('progress');

    expect(status.isValid()).toBe(true);
  });

  it('should be create a status of type "delivered" with success', () => {
    const status = new Status('delivered');

    expect(status.isValid()).toBe(true);
  });

  it('should be not create a status with success', () => {
    const status = new Status('statuswitherror');

    expect(status.isValid()).toBe(false);
  });
});
