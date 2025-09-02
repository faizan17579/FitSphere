import { Schema, model, models } from 'mongoose';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  avatarUrl?: string;
  friends: string[]; // user ids
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, index: true },
  passwordHash: { type: String, required: true },
  avatarUrl: { type: String },
  friends: { type: [Schema.Types.ObjectId], ref: 'User', default: [] },
}, { timestamps: true });

UserSchema.index({ email: 1 }, { unique: true });

const User = models.User || model<IUser>('User', UserSchema);
export default User;
