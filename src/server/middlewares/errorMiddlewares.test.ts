import { type NextFunction, type Request, type Response } from "express";
import { generalError, notFoundError } from "./errorMiddlewares";
import CustomError from "../CustomError/CustomError.js";

describe("Given a notFoundError middleware", () => {
  describe("When it receives an error", () => {
    test("Then it should call the response's method status with 400", () => {
      const expectedStatus = 404;
      const expectedMessage = "Endpoint not found";
      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      const expectedError = new CustomError(expectedMessage, expectedStatus);

      notFoundError(req as Request, res as Response, next as NextFunction);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});

describe("Given a generalError middleware", () => {
  describe("When it receives an error with statusCode 402", () => {
    test("Then it should call the response's method status with 402", () => {
      const expectedStatus = 402;
      const expectedMessage = "";
      const error = new CustomError(expectedMessage, expectedStatus);
      const req = {};
      const next = jest.fn();
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      generalError(
        error,
        req as Request,
        res as Response,
        next as NextFunction
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});
