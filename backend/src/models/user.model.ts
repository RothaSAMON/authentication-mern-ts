import mongoose from "mongoose";
import { compareValue, hashValue } from "../utils/bcrypt";

export interface UserDocument extends mongoose.Document {
  email: string;
  password: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Compare password: Take value as "String" and return value as "Boolean"
  comparePassword(val: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
  },
  {
    // This "timestamps" mean that it will generate createdAt, updatedAt automatically
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // Check if the Password Modidy, we dont hash
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await hashValue(this.password);
  next();
});

userSchema.methods.comparePassword = async function (val: string) {
  return compareValue(val, this.password);
};

const UserModal = mongoose.model<UserDocument>("User", userSchema);
export default UserModal;
