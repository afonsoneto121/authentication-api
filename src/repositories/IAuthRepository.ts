import {User} from '../models/User';

interface IAuthRepository {
  login(email: string): Promise<User | null>
}

export {IAuthRepository};
