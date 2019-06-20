import { User } from 'Domain/User/Entities/User';

export interface IUserRepository {
  emailExists: (email: string) => boolean;
  createUser: (user: User) => void;
}
