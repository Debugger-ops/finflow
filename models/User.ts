import { Schema, Document, model, models } from "mongoose";

export interface IUser extends Document {
  name?: string;
  email: string;
  password: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Avoid recompiling model during hot reloads in Next.js
const User = models.User || model<IUser>("User", UserSchema);

export default User;
