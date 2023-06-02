import { type Request } from "express";
import { type Types } from "mongoose";

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

export interface ExtinguisherData {
  brand: string;
  model: string;
  class: string[];
  img: string;
  usefulLife: string;
  fireExtinguishingAgent: string;
  description: string;
  disadvantages: string;
  strengths: string;
  user: Types.ObjectId;
}

export interface CustomRequest extends Request {
  userId: string;
}
