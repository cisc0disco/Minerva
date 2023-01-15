import mongoose from "mongoose";

export interface UserSchema {
  name: string;
  class: string;
  username: string;
  email: string;
}

const UserSchema = new mongoose.Schema<UserSchema>({
  name: String,
  class: String,
  username: String,
  email: String,
});

export default (mongoose.models.User as mongoose.Model<UserSchema>) ||
  mongoose.model("User", UserSchema);
