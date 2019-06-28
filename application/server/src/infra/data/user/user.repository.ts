import { IUser } from 'domain/user/entities/user.entity';
import { IUserRepository } from 'domain/user/repositories/iuser.repository';
import { UserSchema } from 'infra/data/user/user.schema';
import { IResponse } from 'shared/interfaces/response';
import { singleton } from 'tsyringe';

@singleton()
export default class UserRepository implements IUserRepository {
  public async createUser(user: IUser): Promise<IResponse> {
    try {
      const userCreated = await UserSchema.create(user);
      await userCreated.save();

      return { success: true };
    } catch (error) {
      return { success: false, message: error };
    }
  }

  public async emailExists(email: string): Promise<boolean> {
    const user = await UserSchema.find({ email });

    if (user.length > 0) {
      return true;
    }

    return false;
  }
}
