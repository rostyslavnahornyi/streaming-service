import { Schema, model } from "mongoose";

interface IUser {
    email: string;
    password: string;
    username?: string;
    avatarURL?: string;
}

const userScheme = new Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String },
    avatarURL: { type: String },
});

export default model<IUser>("User", userScheme);
