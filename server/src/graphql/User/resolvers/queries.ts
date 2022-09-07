import { UserModel } from "../../../db/models";
import { IResolverMap } from "../../../utils/interfaces/IResolverMap";

export default <IResolverMap>{
    findUsers: async (parent, args, ctx, info) => {
        const { query } = args;

        return await UserModel.find({}, null, JSON.parse(query));
    },
    findUserOne: async (parent, args, ctx, info) => {
        const { id } = args;

        return await UserModel.findById(id);
    },
    countUsers: async (parent, args, ctx, info) => {
        return await UserModel.count();
    },
};
