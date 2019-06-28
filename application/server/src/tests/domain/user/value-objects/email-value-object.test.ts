import { Email } from 'domain/user/value-objects/email.value-object';

describe('Test of ValueObject of Email', () => {
  it('should be create a email with success', () => {
    const email = new Email('ragnar@email.com');

    expect(email.isValid()).toBe(true);
  });

  it('should be not create a email with success', () => {
    const email = new Email('emailwitherror');

    expect(email.isValid()).toBe(false);
  });
});
