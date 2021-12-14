import {User, UserModel} from '../../models/User';
import {IAuthRepository} from '../IAuthRepository';

class AuthMongoImp implements IAuthRepository {
  public async login(email: string): Promise<User | null> {
    return await UserModel.findOne({email}, {_id: 0});
  }
}

export {AuthMongoImp};
