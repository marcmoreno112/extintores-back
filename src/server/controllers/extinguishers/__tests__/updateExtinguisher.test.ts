import { type NextFunction, type Response } from "express";
import { extinguishersMock } from "../../../../mocks/factories/extinguisherFactory/extinguisherFactory";
import { type ExtinguisherData } from "../../../../types";
import { type UpdateRequest } from "../types";
import Extinguisher from "../../../../database/models/Extinguisher";
import { updateExtinguisher } from "../extinguishersController";

describe("Given a updateExtinguisher controller", () => {
  describe("When it receives a request with an extinguisher to be updated", () => {
    test("Then it should call the response status method with 200 and json method with the message 'Extinguisher updated'", async () => {
      const extinguisherMock: ExtinguisherData = {
        ...extinguishersMock(1)[0],
        id: "1234",
      };

      const req: Partial<UpdateRequest> = {
        body: { extinguisher: extinguisherMock },
      };

      const expectedUpdatedExtinguisher: ExtinguisherData = extinguisherMock;

      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      Extinguisher.findByIdAndUpdate = jest
        .fn()
        .mockResolvedValue(expectedUpdatedExtinguisher);

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
});
