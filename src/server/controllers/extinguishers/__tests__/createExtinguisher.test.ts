import { type Response, type NextFunction } from "express";
import { createExtinguisher } from "../extinguishersController";
import Extinguisher from "../../../../database/models/Extinguisher";
import { type CreateRequest } from "../types";

describe("Given a createExtinguisher controller", () => {
  describe("When it receives a request with a new extinguisher", () => {
    test("Then it should call the response status method with 200 and json method with the message 'Extinguisher created'", async () => {
      const extinguisherMock = {
        brand: "H3R Performance",
        model: "MX250B",
        class: ["A", "B"],
        img: "https://cdn.discordapp.com/attachments/1115063176153804870/1116305879864721408/6-_H3R_Performance_-_MX250B.webp",
        usefulLife: "10 años",
        fireExtinguishingAgent: "Halon 1211",
        description:
          "El extintor H3R Performance MX250B utiliza Halon 1211 para extinguir incendios de Clase A y B. Es ideal para vehículos de motor, embarcaciones y áreas donde se requiere una respuesta rápida.",
        disadvantages:
          "El agente Halon 1211 ha sido prohibido en muchos países debido a su impacto ambiental y efectos negativos en la capa de ozono. Además, el extintor puede ser costoso en comparación con otras opciones disponibles.",
        strengths:
          "El extintor H3R Performance MX250B ofrece una respuesta rápida y eficaz en incendios de vehículos y embarcaciones. Su tamaño compacto y diseño de montaje facilitan su instalación en espacios limitados.",
        user: "647f46ac0d057eb27cc93b77",
      };

      const req: Partial<CreateRequest> = { body: extinguisherMock };

      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      Extinguisher.create = jest.fn();

      await createExtinguisher(
        req as CreateRequest,
        res as Response,
        next as NextFunction
      );

      const expectedStatus = 200;

      const expectedMessage = "Extinguisher created";

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith({ message: expectedMessage });
    });
  });
});
