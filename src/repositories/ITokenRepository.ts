import {Token} from '../models/Token';

interface ITokenRepository {
  saveToken(key: string): Promise<void>,
  saveRefreshToken(key: string, value: Token): Promise<void>,
  tokenExists(key: string): Promise<Boolean>,
  findTokenByKey(key: string): Promise<Token>,
  deleteToken(key: string): Promise<void>
}

export {ITokenRepository};
