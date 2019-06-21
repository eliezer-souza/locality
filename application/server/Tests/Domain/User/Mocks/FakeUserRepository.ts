import { User } from 'Domain/User/Entities/User';
import { IUserRepository } from 'Domain/User/Repositories/IUserRepository';

export class FakeUserRepository implements IUserRepository {
  emailExists(email: string): boolean {
    if (email === 'locality@email.com') {
      return true;
    }

    return false;
  }

  createUser(user: User): void {}
}
