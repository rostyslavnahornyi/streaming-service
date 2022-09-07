import mongoose, { model, Schema } from "mongoose";

interface IMovie {
    name: string;
    genre: string;
    releaseDate: Date;
}

const movieScheme = new Schema<IMovie>({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
});

export default model<IMovie>("Movie", movieScheme);
