import { type NextFunction, type Response } from "express";
import { extinguishersMock } from "../../../../mocks/factories/extinguisherFactory/extinguisherFactory";
import { type ExtinguisherData } from "../../../../types";
import { type UpdateRequest } from "../types";
import Extinguisher from "../../../../database/models/Extinguisher";
import { updateExtinguisher } from "../extinguishersController";
import CustomError from "../../../CustomError/CustomError";

describe("Given a updateExtinguisher controller", () => {
  describe("When it receives a request with an extinguisher to be updated", () => {
    test("Then it should call the response status method with 200 and json method with the message 'Extinguisher updated'", async () => {
      const extinguisherMock: ExtinguisherData = {
        ...extinguishersMock(1)[0],
        id: "1234",
      };

      const req: Partial<UpdateRequest> = {
        params: {
          id: extinguisherMock.id,
        },
        body: { extinguisher: extinguisherMock },
      };

      const expectedUpdatedExtinguisher: ExtinguisherData = extinguisherMock;

      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      Extinguisher.findByIdAndUpdate = jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(expectedUpdatedExtinguisher),
      });

      await updateExtinguisher(
        req as UpdateRequest,
        res as Response,
        next as NextFunction
      );

      const expectedStatus = 200;

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({
        extinguisher: expectedUpdatedExtinguisher,
      });
    });
  });

  describe("When it receives a request and the database fails", () => {
    test("Then it should call the response with a 400 and 'Error updating the extinguisher' error", async () => {
      const extinguisherMock: ExtinguisherData = {
        ...extinguishersMock(1)[0],
        id: "1234",
      };

      const req: Partial<UpdateRequest> = {
        body: { extinguisher: extinguisherMock },
      };

      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      const expectedStatus = 400;

      const error = new CustomError(
        "Error updating the extinguisher",
        expectedStatus
      );

      Extinguisher.findByIdAndUpdate = jest.fn().mockReturnValue({
        exec: jest.fn().mockRejectedValue(error),
      });

      await updateExtinguisher(
        req as UpdateRequest,
        res as Response,
        next as NextFunction
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
