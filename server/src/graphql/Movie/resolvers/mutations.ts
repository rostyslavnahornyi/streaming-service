import Movie from "../../../db/models/Movie";
import { IResolverMap } from "../../../utils/interfaces/IResolverMap";

export default <IResolverMap>{
    createMovie: async (parent, args, ctx, info) => {
        const { input } = args;

        const movie = new Movie(input);
        return await movie.save();
    },
    upsertMovie: async (parent, args, ctx, info) => {
        const { id, input } = args;

        return await Movie.findByIdAndUpdate(id, input);
    },
    deleteMovie: async (parent, args, ctx, info) => {
        const {id} = args;

        return await Movie.findByIdAndDelete(id);
    },
};
