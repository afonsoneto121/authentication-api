import Token from '../../../models/Token';
import {User} from '../../../models/User';
import ITokenRepository from '../../../repositories/ITokenRepository';
import {generateToken} from '../../../utils/utils';
import JWT from 'jsonwebtoken';
export default class ServiceRefreshToken {
  constructor(private repository: ITokenRepository) {}

  async refreshToken(userId: string, token: string) {
    const defaultKeyToken = `user-${userId}`;
    const tokenAlreadyExists = await this.repository.tokenExists(defaultKeyToken);
    if (!tokenAlreadyExists) {
      throw new Error('Token does not exists');
    }

    const oldTokenIsValid = await this.repository.findTokenByKey(defaultKeyToken);
    if (oldTokenIsValid.lastToken === 'refresh') {

    } else if (oldTokenIsValid.lastToken !== token) {
      this.repository.deleteToken(defaultKeyToken);
      throw new Error('Token does not valid');
    }
    const payload = JWT.decode(token, {complete: true});
    if (!payload) {
      throw new Error('Payload does not valid');
    }
    const userToken: User = {
      id: payload.payload.sub,
      email: '',
      name: payload.payload['username'],
      password: '',
    };
    const newToken = generateToken(userToken);
    const tokenToSave: Token = {
      lastToken: newToken,
    };
    await this.repository.saveRefreshToken(defaultKeyToken, tokenToSave);
    return newToken;
  }
}
