import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from 'dotenv';
import { UserInputError } from "apollo-server-core";
import { UserModel } from "../../../db/models";
import { ErrorMessages } from "../../../utils/enums/ErrorMessages";
import { IResolverMap } from "../../../utils/interfaces/IResolverMap";

dotenv.config();

const SECRET = process.env.SECRET!;

export default <IResolverMap>{
    login: async (parent, args, ctx, info) => {
        const { email, password } = args;

        const candidate = await UserModel.findOne({ email });

        if (!candidate) {
            throw new UserInputError(ErrorMessages.userNotFound);
        }

        const passwordIsCorrect = bcrypt.compareSync(
            password,
            candidate.password
        );

        if (!passwordIsCorrect) {
            throw new UserInputError(ErrorMessages.incorrectCredentials);
        }

        return {
            token: jwt.sign({ _id: candidate._id }, SECRET, {
                expiresIn: "1d",
            }),
        };
    },
};
