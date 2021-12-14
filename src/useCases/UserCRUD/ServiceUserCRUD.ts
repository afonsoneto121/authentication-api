import {User} from '../../models/User';
import {v4 as uuidv4} from 'uuid';
import bcrypt from 'bcrypt';
import {IUserRepository} from '../../repositories/IUserRepository';
import {UserDTO} from './DTOUserCRUD';

const salt = process.env.SALT || 10;

class ServiceUserCRUD {
  private repository: IUserRepository;
  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  public async saveUser(user: UserDTO) {
    const userAlreadyExists = await this.repository.findByEmail(user.email);
    if (userAlreadyExists) {
      throw new Error('User already exists');
    }
    user.id = uuidv4();
    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;
    await this.repository.saveUser(user);
  }

  public async findAll(): Promise<User[]> {
    return await this.repository.findAll();
  }

  public async findById(id: string): Promise<User | null> {
    const result = await this.repository.findById(id);
    if (!result) {
      throw new Error('User not found');
    }
    return result;
  }

  public async updateUser(user: UserDTO, userId: string): Promise<void> {
    const userAlreadyExists = await this.repository.findByEmail(user.email);
    if (userAlreadyExists) {
      throw new Error('User already exists');
    }
    await this.repository.updateUser(user, userId);
  }

  public async deleteUser(id: string): Promise<void> {
    await this.repository.deleteUser(id);
  }
}
export {ServiceUserCRUD};
