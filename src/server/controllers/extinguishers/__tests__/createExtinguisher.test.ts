import { type Response, type NextFunction } from "express";
import { createExtinguisher } from "../extinguishersController";
import Extinguisher from "../../../../database/models/Extinguisher";
import { type CreateRequest } from "../types";
import { Types } from "mongoose";
import { extinguishersMock } from "../../../../mocks/factories/extinguisherFactory/extinguisherFactory";
import CustomError from "../../../CustomError/CustomError";

describe("Given a createExtinguisher controller", () => {
  describe("When it receives a request with a new extinguisher", () => {
    test("Then it should call the response status method with 200 and json method with the message 'Extinguisher created'", async () => {
      const extinguisherMock = extinguishersMock(1)[0];

      const req: Partial<CreateRequest> = {
        body: { extinguisher: extinguisherMock },
      };

      const expectedExtinguisher = {
        body: { ...extinguisherMock },
        id: new Types.ObjectId().toString(),
      };

      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      Extinguisher.create = jest.fn().mockResolvedValue(expectedExtinguisher);

      await createExtinguisher(
        req as CreateRequest,
        res as Response,
        next as NextFunction
      );

      const expectedStatus = 200;

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({
        extinguisher: expectedExtinguisher,
      });
    });
  });
  describe("When it receives a request with an invalid extinguisher", () => {
    test("Then it should call the response status method with 400 and json method with the message 'Error creating the extinguisher'", async () => {
      const extinguisherMock = extinguishersMock(1)[0];

      const req: Partial<CreateRequest> = {
        body: { extinguisher: extinguisherMock },
      };

      const expectedErrorMessage = "Error creating the extinguisher";

      const expectedError = new CustomError(expectedErrorMessage, 400);

      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      Extinguisher.create = jest.fn().mockResolvedValue(undefined);

      await createExtinguisher(
        req as CreateRequest,
        res as Response,
        next as NextFunction
      );

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
