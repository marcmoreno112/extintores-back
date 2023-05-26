import { type NextFunction, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import {
  type UserDataStructure,
  type UserCredentials,
  type UserCredentialsRequest,
} from "../../types";
import { loginUser } from "./userControllers";
import User from "../../../database/models/User";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a loginUser controller", () => {
  describe("When it receives a request with valid credentials", () => {
    test("Then it should respond with a 200 status and a token", async () => {
      const validUser: UserCredentials = {
        username: "admin",
        password: "admin",
      };

      const req: Pick<UserCredentialsRequest, "body"> = { body: validUser };

      const expectedUser: UserDataStructure = {
        _id: new Types.ObjectId().toString(),
        username: validUser.username,
        password:
          "$2y$10$oIlXdXUt5rwSsxm95Sxg/uHPP77viYVgQjWbVc6nH0YbewkmkBepS",
      };

      User.findOne = jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(expectedUser),
      });

      bcrypt.compare = jest.fn().mockReturnValue(true);

      jwt.sign = jest.fn().mockReturnValue("token");

      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      await loginUser(
        req as UserCredentialsRequest,
        res as Response,
        next as NextFunction
      );

      const expectedStatus = 200;

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({ token: "token" });
    });
  });
});
