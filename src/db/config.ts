import {connect, connection, ConnectOptions} from 'mongoose';

const host = process.env.MONGO_HOST || 'localhost';
const port = process.env.MONGO_PORT || '27017';
const db = process.env.MONGO_DB || 'users';

const user = process.env.MONGO_USER || 'root';
const pass = process.env.MONGO_PASS || 'root';

const URL = process.env.MONGO_URL || `mongodb://${user}:${pass}@${host}:${port}/${db}?authSource=admin`;
const options = {
  autoIndex: false,
  autoCreate: true,
} as ConnectOptions;

connection.on('open', () => {
  console.log('Successfully connected to database');
});
connection.on('error', () => {
  throw new Error('Error connecting to database');
});

export const run = async (): Promise<void> => {
  await connect(URL, options);
};
