import {User} from '../../models/User';
import IUserRepository from '../IUserRepository';

export default class UserMongoImp implements IUserRepository {
  saveUser(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  updateUser(user: User, id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
