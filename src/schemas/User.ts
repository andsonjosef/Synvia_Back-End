import { Document, Schema } from 'mongoose';
import mongoose from '../database/index.db';

import bcrypt from 'bcryptjs';

export interface UserDocument extends mongoose.Document {
  id: string;
  email: string;
  name: string;
  password?: string;
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

type User = Document & {};

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

UserSchema.pre("save", async function (next: mongoose.HookNextFunction) {
  let user = this as UserDocument;

  if (!user.isModified("password")) return next();
  if (user.password) {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  }
  return next();
});



export default mongoose.model<User>('User', UserSchema);