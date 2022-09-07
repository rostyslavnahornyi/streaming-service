import { mergeSchemas } from "@graphql-tools/schema";

import userScheme from "./User/scheme";
import authScheme from "./Auth/scheme";
import showScheme from "./Show/sheme";
import seriesScheme from "./Series/sheme";
import episodeScheme from "./Episode/sheme";
import movieScheme from "./Movie/sheme";
import streamingServiceScheme from "./StreamingService/sheme";

export const rootSchema = mergeSchemas({
    schemas: [
        authScheme,
        userScheme,
        showScheme,
        episodeScheme,
        movieScheme,
        seriesScheme,
        streamingServiceScheme
    ],
});
