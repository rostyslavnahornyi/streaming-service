import * as dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IResolverMap } from "../../../utils/interfaces/IResolverMap";
import { UserModel } from "../../../db/models";
import { AuthenticationError, UserInputError } from "apollo-server-core";
import { ErrorMessages } from "../../../utils/enums/ErrorMessages";

dotenv.config();

const SALT = +process.env.SALT!;
const SECRET = process.env.SECRET!;

export default <IResolverMap>{
    register: async (parent, args, ctx, info) => {
        const { email, password, username } = args;

        const userIsExist = await UserModel.findOne({ email });

        if (userIsExist) {
            throw new AuthenticationError(ErrorMessages.emailExists);
        }

        const newUser = await UserModel.create({
            email,
            password: bcrypt.hashSync(password, SALT),
            username,
        });

        return {
            token: jwt.sign({ _id: newUser._id }, SECRET, {
                expiresIn: "1d",
            }),
        };
    },
    changePassword: async (parent, args, ctx, info) => {
        const { _id } = ctx.user;
        const { currentPassword, newPassword } = args;

        const user = await UserModel.findById(_id);

        const currPasswordIsEqual = bcrypt.compareSync(
            currentPassword,
            user!.password
        );

        if (!currPasswordIsEqual) {
            throw new UserInputError(ErrorMessages.wrongPassword);
        }

        const hashedNewPassword = bcrypt.hashSync(newPassword, SALT);
        user!.password = hashedNewPassword;

        return await user!.save();
    },
};
