import { type Response, type NextFunction } from "express";
import { extinguishersMock } from "../../../../mocks/factories/extinguisherFactory/extinguisherFactory";
import Extinguisher from "../../../../database/models/Extinguisher";
import { getExtinguisher } from "../extinguishersController";
import { type TestRequest } from "../../../../types";
import CustomError from "../../../CustomError/CustomError";

describe("Given a getExtinguisher controller", () => {
  describe("When it receives a request with a valid id", () => {
    test("Then it should call the response status method with 200 and json method with an extinguisher", async () => {
      const id = "1234mockID";

      const req: Partial<TestRequest> = {
        params: {
          id,
        },
      };

      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      const extinguisher = extinguishersMock(1)[0];

      const expectedStatus = 200;

      Extinguisher.findById = jest
        .fn()
        .mockReturnValue({ exec: jest.fn().mockResolvedValue(extinguisher) });

      await getExtinguisher(
        req as TestRequest<{ id: string }>,
        res as Response,
        next as NextFunction
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({ extinguisher });
    });
  });
  describe("When it receives a request and the user doesn't exist", () => {
    test("Then it should call the next function with the error 'Extinguisher not found'", async () => {
      const id = "1234mockID";
      const expectedTextError = "Extinguisher not found";
      const expectedStatus = 404;
      const error = new CustomError(expectedTextError, expectedStatus);
      const req: Partial<TestRequest> = {
        params: {
          id,
        },
      };
      const res = {};
      const next: NextFunction = jest.fn();

      Extinguisher.findById = jest
        .fn()
        .mockReturnValue({ exec: jest.fn().mockResolvedValue(null) });

      await getExtinguisher(
        req as TestRequest<{ id: string }>,
        res as Response,
        next
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
