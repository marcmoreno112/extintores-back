import { type Response, type NextFunction, type Request } from "express";
import { getExtinguishers } from "../extinguishersController";
import Extinguisher from "../../../../database/models/Extinguisher";
import { extinguishersMock } from "../../../../mocks/factories/extinguisherFactory/extinguisherFactory";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a getExtinguishers controller", () => {
  describe("When it receives a request and the database answers", () => {
    test("Then it should call the response status method with 200 and json method with a list of extinguishers", async () => {
      const req: Partial<
        Request<
          Record<string, unknown>,
          Record<string, unknown>,
          Record<string, unknown>,
          { loadNumber: number }
        >
      > = { query: { loadNumber: 1 } };

      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      const extinguishers = extinguishersMock(1);

      const expectedStatus = 200;

      Extinguisher.find = jest.fn().mockReturnValue({
        limit: jest.fn().mockReturnThis(),
        exec: jest.fn().mockResolvedValue(extinguishers),
      });

      await getExtinguishers(
        req as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          Record<string, unknown>,
          { loadNumber: number }
        >,
        res as Response,
        next as NextFunction
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({
        extinguishers,
      });
    });
  });
  describe("When it receives a request and the database fails", () => {
    test("Then it should call the next function with a 'Database error' error", async () => {
      const req: Partial<
        Request<
          Record<string, unknown>,
          Record<string, unknown>,
          Record<string, unknown>,
          { loadNumber: number }
        >
      > = { query: { loadNumber: 1 } };

      const res = {};
      const next = jest.fn();
      const error = new Error("Database error");

      Extinguisher.find = jest.fn().mockReturnValue({
        limit: jest.fn().mockReturnThis(),
        exec: jest.fn().mockRejectedValue(error),
      });

      await getExtinguishers(
        req as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          Record<string, unknown>,
          { loadNumber: number }
        >,
        res as Response,
        next as NextFunction
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
