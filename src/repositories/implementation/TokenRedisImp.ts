import {Token} from '../../models/Token';
import {ITokenRepository} from '../ITokenRepository';
import {redis} from '../../db/redis.config';
class TokenRedisImp implements ITokenRepository {
  public async saveRefreshToken(key: string, value: Token): Promise<void> {
    const ttl = await redis.ttl(key);
    await redis
        .multi()
        .set(key, JSON.stringify(value))
        .expire(key, ttl)
        .exec();
  }
  public async deleteToken(key: string): Promise<void> {
    await redis.del(key);
  }
  public async tokenExists(key: string): Promise<Boolean> {
    return await redis.exists(key) === 1 ? true : false;
  }
  public async findTokenByKey(key: string): Promise<Token> {
    const tokenStr = await redis.get(key);
    return JSON.parse(tokenStr || '');
  }
  public async saveToken(key: string): Promise<void> {
    const timeExpireInSeconds = (process.env.TIME_EXPIRE_TOKEN || 60*60*24*7) as number; // 7 days
    const token: Token = {
      lastToken: 'refresh',
    };
    await redis
        .pipeline()
        .set(key, JSON.stringify(token))
        .expire(key, timeExpireInSeconds)
        .exec();
  }
}

export {TokenRedisImp};
