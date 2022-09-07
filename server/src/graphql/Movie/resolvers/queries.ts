import Movie from "../../../db/models/Movie";
import { IResolverMap } from "../../../utils/interfaces/IResolverMap";

export default <IResolverMap>{
    getDuration: async (parent, args, ctx, info) => {},
    getMovieOne: async (parent, args, ctx, info) => {
        const { id } = args;

        return Movie.findById(id);
    },
    getMovies: async (parent, args, ctx, info) => {
        const { query } = args;

        return Movie.find({}, null, JSON.parse(query));
    },
    countMovies: async (parent, args, ctx, info) => {
        return Movie.count();
    },
};
