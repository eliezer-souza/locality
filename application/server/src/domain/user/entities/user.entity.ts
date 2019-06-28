import { hashSync } from 'bcryptjs';
import { Email } from 'domain/user/value-objects/email.value-object';
import { Name } from 'domain/user/value-objects/name.value-object';
import { Entity } from 'shared/entities/entity';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class User extends Entity {
  private readonly name: Name;
  private readonly email: Email;
  private readonly password: string;

  constructor(name: Name, email: Email, password: string) {
    super();
    name.isValid()
      ? (this.name = name)
      : this.addNotification(name.notifications);

    email.isValid()
      ? (this.email = email)
      : this.addNotification(email.notifications);

    this.password = hashSync(password, 8);
  }

  public data(): IUser {
    return {
      id: this.id,
      firstName: this.name.firstName,
      lastName: this.name.lastName,
      email: this.email.address,
      password: this.password,
    };
  }
}
