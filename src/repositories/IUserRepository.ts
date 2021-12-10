import {User} from '../models/User';

interface IUserRepository {
  saveUser(user: User): Promise<void>;
  deleteUser(id: string): Promise<void>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User| null>;
  findByEmail(email: string): Promise<User| null>;
  updateUser(user: User, id: string): Promise<void>;
}

export default IUserRepository;
