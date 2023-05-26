import { type Request } from "express";
import { type Types } from "mongoose";

export interface UserCredentials {
  username: string;
  password: string;
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
