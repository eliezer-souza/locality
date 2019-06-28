import { User } from 'domain/user/entities/user.entity';
import { Email } from 'domain/user/value-objects/email.value-object';
import { Name } from 'domain/user/value-objects/name.value-object';

describe('test of entity user', () => {
  it('should be create user with success', () => {
    const nameUser = new Name('Ragnar', 'Lothbrook');
    const emailUser = new Email('ragnar@email.com');
    const user = new User(nameUser, emailUser, 'odin@123');

    expect(user.isValid()).toBe(true);
  });

  it('should be not create user with success', () => {
    const nameUser = new Name('Ragnar', 'Lothbrook');
    const emailUser = new Email('emailwitherror');
    const user = new User(nameUser, emailUser, 'odin@123');

    expect(user.isValid()).toBe(false);
  });
});
