import { UserModel } from "../../../db/models";
import { IResolverMap } from "../../../utils/interfaces/IResolverMap";

export default <IResolverMap>{
    deleteUser: async (parent, args, ctx, info) => {
        const { id } = args;

        return await UserModel.findByIdAndDelete(id);
    },
    upsertUser: async (parent, args, ctx, info) => {
        const {
            id,
            input: { username, imgUrl },
        } = args;

        return await UserModel.findByIdAndUpdate(id, { username, imgUrl });
    },
};
