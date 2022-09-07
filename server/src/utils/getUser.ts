import express from "express";
import * as dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";

dotenv.config();

export const getUser = (req: express.Request): JwtPayload | string | null => {
    const bearerToken = req.headers.authorization || "";
    const SECRET = process.env.SECRET!;

    if (bearerToken) {
        const token = bearerToken.replace('Bearer ', '');

        const user = jwt.verify(token, SECRET);

        return user;
    }

    return null;
};
