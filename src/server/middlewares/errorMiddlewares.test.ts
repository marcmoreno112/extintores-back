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
  const req = {};
  const next = jest.fn();
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  describe("When it receives an error with statusCode 402 and message 'Mock error'", () => {
    test("Then it should call the response's status method with 402 and json method with 'Mock error' message", () => {
      const expectedStatus = 402;
      const expectedMessage = "Mock error";
      const error = new CustomError(expectedMessage, expectedStatus);

      generalError(
        error,
        req as Request,
        res as Response,
        next as NextFunction
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({ message: expectedMessage });
    });
  });
  describe("When it receives an error without statusCode", () => {
    test("Then it should return an error with status 500 and message 'General error'", () => {
      const expectedStatus = 500;
      const expectedMessage = "General error";
      const error = new Error();

      generalError(
        error as CustomError,
        req as Request,
        res as Response,
        next as NextFunction
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({ message: expectedMessage });
    });
  });
});
