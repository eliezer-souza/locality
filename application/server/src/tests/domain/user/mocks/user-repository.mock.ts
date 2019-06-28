import { IUser } from 'domain/user/entities/user.entity';
import { IUserRepository } from 'domain/user/repositories/iuser.repository';
import { IResponse } from 'shared/interfaces/response';

export class FakeUserRepository implements IUserRepository {
  emailExists(email: string): Promise<boolean> {
    if (email === 'locality@email.com') {
      return new Promise(result => result(true));
    }

    return new Promise(result => result(false));
  }

  createUser(user: IUser): Promise<IResponse> {
    return new Promise(result => result({ success: true }));
  }
}
