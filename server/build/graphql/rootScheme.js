"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootSchema = void 0;
const schema_1 = require("@graphql-tools/schema");
const scheme_1 = __importDefault(require("./User/scheme"));
exports.rootSchema = (0, schema_1.mergeSchemas)({
    schemas: [
        scheme_1.default,
    ]
});
