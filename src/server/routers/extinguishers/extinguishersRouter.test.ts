import "../../../loadEnvironment.js";
import { MongoMemoryServer } from "mongodb-memory-server";
import request from "supertest";
import connectToDatabase from "../../../database/connectToDatabase.js";
import mongoose, { Types } from "mongoose";
import paths from "../../../utils/paths.js";
import Extinguisher from "../../../database/models/Extinguisher.js";
import app from "../../index.js";
import {
  type ExtinguisherDbData,
  type ExtinguisherData,
  type ExtinguisherStructure,
} from "../../../types.js";
import { extinguishersMock } from "../../../mocks/factories/extinguisherFactory/extinguisherFactory.js";
import User from "../../../database/models/User.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectToDatabase(server.getUri());
});

afterEach(async () => {
  await Extinguisher.deleteMany();
});

afterAll(async () => {
  await server.stop();
  await mongoose.connection.close();
});

describe(`Given a GET '${paths.extinguishers}' endpoint`, () => {
  const mockExtinguishers = extinguishersMock(3);

  beforeEach(async () => {
    await Extinguisher.create(mockExtinguishers);
  });

  describe("When it receives a request", () => {
    test("Then it should responde with status 200 and a list of extinguishers", async () => {
      const expectedStatus = 200;

      const path = paths.extinguishers;

      const response: { body: { extinguishers: ExtinguisherData[] } } =
        await request(app).get(path).expect(expectedStatus);

      const { extinguishers } = response.body;

      expect(extinguishers).toHaveLength(3);
    });
  });
});

describe(`Given a DELETE endpoint`, () => {
  describe("When it receives a request with an invalid token", () => {
    test("Then it should respond with status 401 and message 'Invalid token'", async () => {
      const expectedStatus = 401;
      const expectedMessage = "Invalid token";
      const fakeToken = "64711e57b77928c1d3ce27d1";
      const fakeId = "1234";

      const path = `${paths.extinguishers}/${fakeId}`;

      const response = await request(app)
        .delete(path)
        .set("Authorization", `Bearer ${fakeToken}`)
        .expect(expectedStatus);

      expect(response.body.message).toBe(expectedMessage);
    });
  });

  describe("When it receives a request with a valid token and an existing id", () => {
    test("Then it should respond with status 200 and message 'Extinguisher deleted'", async () => {
      const mockExtinguisherData = extinguishersMock(1);

      const mockExtinguisher: ExtinguisherDbData = {
        _id: new Types.ObjectId("1234mockedId"),
        ...mockExtinguisherData[0],
      };

      await Extinguisher.create(mockExtinguisher);
      await User.create({
        username: "admin",
        password:
          "$2y$10$oIlXdXUt5rwSsxm95Sxg/uHPP77viYVgQjWbVc6nH0YbewkmkBepS",
        name: "admin",
      });

      const expectedStatus = 200;
      const expectedMessage = "Extinguisher deleted";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmJmYmI3NzkyOGMxZDNjZTI3OTMiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODYxMzE2OTcsImV4cCI6MTcxMjA1MTY5N30.mrAkUYiwCME4oXmabUOPOPBZ-hqXygbu1_KKSXh9TOA";

      const id = mockExtinguisher._id.toString();

      const path = `${paths.extinguishers}/${id}`;

      const response = await request(app)
        .delete(path)
        .set("Authorization", `Bearer ${token}`)
        .expect(expectedStatus);

      expect(response.body.message).toBe(expectedMessage);
    });
  });

  describe("When it receives a request with a valid token and an id that doesn't exist", () => {
    test("Then it should respond with status 404 and message 'Extinguisher not found'", async () => {
      const expectedStatus = 404;
      const expectedMessage = "Extinguisher not found";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmJmYmI3NzkyOGMxZDNjZTI3OTMiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODYxMzE2OTcsImV4cCI6MTcxMjA1MTY5N30.mrAkUYiwCME4oXmabUOPOPBZ-hqXygbu1_KKSXh9TOA";

      const id = "5fbd2a81f4b3c96d54d32c9a";

      const path = `${paths.extinguishers}/${id}`;

      const response = await request(app)
        .delete(path)
        .set("Authorization", `Bearer ${token}`)
        .expect(expectedStatus);

      expect(response.body.message).toBe(expectedMessage);
    });
  });
});

describe("Given a GET 'extinguishers/:647f47000d057eb27cc93b79' endpoint", () => {
  describe("When it receives a request with a valid id", () => {
    test("Then it should responde with status 200 and a extinguisher", async () => {
      const mockExtinguisher = {
        brand: "hola",
        class: ["A"],
        description: "hola",
        disadvantages: "hola",
        fireExtinguishingAgent: "hola",
        img: "hola",
        model: "hola",
        strengths: "hola",
        usefulLife: "hola",
        user: "hola",
      };

      const newExtinguisher: ExtinguisherDbData = await Extinguisher.create(
        mockExtinguisher
      );

      const newId = newExtinguisher._id.toString();

      const newMockExtinguisher = {
        id: newId,
        brand: "hola",
        class: ["A"],
        description: "hola",
        disadvantages: "hola",
        fireExtinguishingAgent: "hola",
        img: "hola",
        model: "hola",
        strengths: "hola",
        usefulLife: "hola",
        user: "hola",
      };

      const path = `${paths.extinguishers}/${newId}`;

      const expectedStatus = 200;

      const response: { body: { extinguisher: ExtinguisherStructure } } =
        await request(app).get(path).expect(expectedStatus);

      expect(response.body.extinguisher).toStrictEqual(newMockExtinguisher);
    });
  });
});
