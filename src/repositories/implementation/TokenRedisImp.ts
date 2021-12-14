import Token from '../../models/Token';
import ITokenRepository from '../ITokenRepository';
import regis from '../../db/redis.config';
export default class TokenRedisImp implements ITokenRepository {
  async saveRefreshToken(key: string, value: Token): Promise<void> {
    const ttl = await regis.ttl(key);
    await regis
        .multi()
        .set(key, JSON.stringify(value))
        .expire(key, ttl)
        .exec();
  }
  async deleteToken(key: string): Promise<void> {
    await regis.del(key);
  }
  async tokenExists(key: string): Promise<Boolean> {
    return await regis.exists(key) === 1 ? true : false;
  }
  async findTokenByKey(key: string): Promise<Token> {
    const tokenStr = await regis.get(key);
    return JSON.parse(tokenStr || '');
  }
  async saveToken(key: string): Promise<void> {
    const timeExpireInSeconds = 60*60*24*7; // 7 days
    const token: Token = {
      lastToken: 'refresh',
    };
    await regis
        .pipeline()
        .set(key, JSON.stringify(token))
        .expire(key, timeExpireInSeconds)
        .exec();
  }
}
