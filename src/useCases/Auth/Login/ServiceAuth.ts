import bcrypt from 'bcrypt';
import {IAuthRepository} from '../../../repositories/IAuthRepository';
import {ITokenRepository} from '../../../repositories/ITokenRepository';

class ServiceAuth {
  constructor(
    private repository: IAuthRepository,
    private tokenRepository: ITokenRepository,
  ) {}
  public async login(email: string, password: string) {
    const user = await this.repository.login(email);
    if (!user) {
      throw new Error('Resource protected, not authorized');
    }

    const valid = await bcrypt.compareSync(password, user.password);
    if (!valid) {
      throw new Error('Resource protected, not authorized');
    }
    this.tokenRepository.saveToken(`user-${user.id}`);
    return user;
  }
}
export {ServiceAuth};
