import {User, UserModel} from '../../models/User';
import {IUserRepository} from '../IUserRepository';

class UserMongoImp implements IUserRepository {
  private projection: object;
  constructor() {
    this.projection = {
      _id: 0,
      password: 0,
    };
  }

  public async saveUser(user: User): Promise<void> {
    await UserModel.create(user);
  }

  public async deleteUser(id: string): Promise<void> {
    await UserModel.deleteOne({id});
  }

  public async findAll(): Promise<User[]> {
    return await UserModel.find({}, this.projection);
  }

  public async findById(id: string): Promise<User | null> {
    return await UserModel.findOne({id}, this.projection);
  }

  public async findByEmail(email: string): Promise<User | null> {
    return await UserModel.findOne({email}, this.projection);
  }

  public async updateUser(user: User, id: string): Promise<void> {
    await UserModel.findOneAndUpdate({id}, user);
  }
}

export {UserMongoImp};
