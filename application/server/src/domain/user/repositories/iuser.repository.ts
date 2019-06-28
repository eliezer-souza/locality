import { IUser } from 'domain/user/entities/user.entity';
import { IResponse } from 'shared/interfaces/response';

export interface IUserRepository {
  emailExists: (email: string) => Promise<boolean>;
  createUser: (user: IUser) => Promise<IResponse>;
}
