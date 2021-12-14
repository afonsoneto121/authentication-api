import {model, Schema} from 'mongoose';
export interface User {
  id?: string,
  name: string,
  password: string,
  email: string
}

const schema = new Schema<User>({
  email: {
    required: [true, 'Email is required'],
    type: String,
  },
  id: String,
  name: {
    required: [true, 'Name is required'],
    type: String,
  },
  password: {
    required: [true, 'Password is required'],
    type: String,
  },
}, {
  versionKey: false,
});

export const UserModel = model<User>('User', schema);
