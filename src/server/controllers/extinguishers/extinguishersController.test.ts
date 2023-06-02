import { type Response, type NextFunction, type Request } from "express";
import { getExtinguishers } from "./extinguishersController";
import Extinguisher from "../../../database/models/Extinguisher";
import { type ExtinguisherData } from "../../types";
import { Types } from "mongoose";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a getExtinguishers controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call the response status method with 200 and json method with a list of extinguishers", async () => {
      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      const extinguishersMock: ExtinguisherData[] = [
        {
          brand: "Exting",
          model: "Uisher",
          class: ["A", "K"],
          description: "",
          disadvantages: "",
          fireExtinguishingAgent: "",
          img: "",
          strengths: "",
          usefulLife: "1 year",
          user: new Types.ObjectId(),
        },
      ];

      const expectedStatus = 200;

      Extinguisher.find = jest.fn().mockReturnValue({
        limit: jest.fn().mockReturnThis(),
        exec: jest.fn().mockResolvedValue(extinguishersMock),
      });

      await getExtinguishers(
        req as Request,
        res as Response,
        next as NextFunction
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({
        extinguishers: extinguishersMock,
      });
    });
  });
});
