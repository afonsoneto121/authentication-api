import {model, Schema} from 'mongoose';
export interface User {
  id?: string,
  name: string,
  password: string,
  email: string
}

const schema = new Schema<User>({
  id: String,
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
}, {
  versionKey: false,
});

export const UserModel = model<User>('User', schema);
