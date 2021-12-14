import Redis from 'ioredis';
const url = process.env.REDIS_URL || 'redis://:root@127.0.0.1:6379/1';

const redis = new Redis(url);
redis.on('connected', () => {
  console.log('Connected Redis');
});
redis.on('error', () => {
  console.log('Erro Redis');
});

export default redis;
