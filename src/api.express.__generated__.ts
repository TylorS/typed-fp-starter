/* File auto-generated by @typed/compiler */
import { registerHandlers } from "@typed/framework/express";
import type * as express from "express";
import * as typedModule0 from "./application/api/hello.js";

export const handlers = [
    typedModule0.hello
]
export const router: express.Router = registerHandlers(handlers)