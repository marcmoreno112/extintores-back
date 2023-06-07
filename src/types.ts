import { type Request } from "express";
import { type Types } from "mongoose";
import type * as core from "express-serve-static-core";

export interface UserCredentials {
  username: string;
  password: string;
}

export interface DbUser extends UserCredentials {
  name: string;
}

export type UserCredentialsRequest = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  UserCredentials
>;

export interface UserDataStructure extends UserCredentials {
  _id: string;
}

export interface UserData extends UserCredentials {
  _id: Types.ObjectId;
}

export interface ExtinguisherStructure {
  brand: string;
  model: string;
  class: string[];
  img: string;
  usefulLife: string;
  fireExtinguishingAgent: string;
  description: string;
  disadvantages: string;
  strengths: string;
  user: string;
}

export interface ExtinguisherData extends ExtinguisherStructure {
  id: string;
}

export interface ExtinguisherDbData extends ExtinguisherStructure {
  _id: Types.ObjectId;
}

export interface CustomRequest extends Request {
  userId: string;
}

export interface TestRequest<
  P = core.ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = core.Query,
  Locals extends Record<string, any> = Record<string, any>
> extends core.Request<P, ResBody, ReqBody, ReqQuery, Locals> {
  userId: string;
}
