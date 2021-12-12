import {User, UserModel} from '../../models/User';
import IAuthRepository from '../IAuthRepository';

export default class AuthMongoImp implements IAuthRepository {
  async login(email: string): Promise<User | null> {
    return await UserModel.findOne({email}, {_id: 0});
  }
}
