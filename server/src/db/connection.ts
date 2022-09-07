import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/shows";

export const mongoConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`> MongoDB connected.`);
    } catch (err) {
        console.log(`MongoDB error: ${err}`);
    }
};
