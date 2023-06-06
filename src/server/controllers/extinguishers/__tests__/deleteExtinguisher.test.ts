import { type Response, type NextFunction } from "express";
import { extinguisherMock } from "../../../../mocks/factories/extinguisherFactory/extinguisherFactory";
import { type TestRequest } from "../../../../types";
import Extinguisher from "../../../../database/models/Extinguisher";
import { deleteExtinguisher } from "../extinguishersController";
import CustomError from "../../../CustomError/CustomError";
beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a deleteExtinguisher controller", () => {
  const { id: extinguisherId } = extinguisherMock();

  const req: Partial<TestRequest> = {
    params: {
      id: extinguisherId,
    },
  };

  const next: NextFunction = jest.fn();

  describe("When it receives a request and the user exists", () => {
    test(`Then it should call the response status method with 200 and json method with the message 'Extinguisher deleted'`, async () => {
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expectedMessage = `Extinguisher deleted`;

      const expectedStatus = 200;

      Extinguisher.findByIdAndDelete = jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue("anything"),
      });

      await deleteExtinguisher(
        req as TestRequest<{ id: string }>,
        res as Response,
        next
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({
        message: expectedMessage,
      });
    });
  });
  describe("When it receives a request and the user doesn't exist", () => {
    test("Then it should call the next function with the error 'Extinguisher not found'", async () => {
      const expectedTextError = "Extinguisher not found";
      const expectedStatus = 404;
      const error = new CustomError(expectedTextError, expectedStatus);
      const res = {};

      Extinguisher.findByIdAndDelete = jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(null),
      });

      await deleteExtinguisher(
        req as TestRequest<{ id: string }>,
        res as Response,
        next
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
