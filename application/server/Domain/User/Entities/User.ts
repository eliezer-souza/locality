import { hashSync } from 'bcryptjs';
import Email from 'Domain/User/ValueObjects/Email';
import Name from 'Domain/User/ValueObjects/Name';
import Entity from 'Shared/Entities/Entity';

export default class User extends Entity {
  private _name: Name;
  private _email: Email;
  private _password: string;

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  constructor(name: Name, email: Email, password: string) {
    super();
    name.isValid()
      ? (this._name = name)
      : this.addNotification(name.notifications);

    email.isValid()
      ? (this._email = email)
      : this.addNotification(email.notifications);

    this._password = hashSync(password, 8);
  }
}
