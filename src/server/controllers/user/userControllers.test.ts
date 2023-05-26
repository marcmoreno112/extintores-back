import { type NextFunction, type Response } from "express";
import { type UserCredentials, type UserCredentialsRequest } from "../../types";
import { loginUser } from "./userControllers";
import User from "../../../database/models/User";

describe("Given a loginUser controller", () => {
  describe("When it receives a request with valid credentials", () => {
    test("Then it should respond with a 200 status and a token", async () => {
      const validUser: UserCredentials = {
        username: "admin",
        password: "admin",
      };

      const req: Pick<UserCredentialsRequest, "body"> = { body: validUser };

      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn(),
        json: jest.fn(),
      };

      const next = jest.fn();

      User.findOne = jest.fn();

      await loginUser(
        req as UserCredentialsRequest,
        res as Response,
        next as NextFunction
      );

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
