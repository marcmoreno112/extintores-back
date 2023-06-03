import "../../../loadEnvironment.js";
import { MongoMemoryServer } from "mongodb-memory-server";
import request from "supertest";
import connectToDatabase from "../../../database/connectToDatabase.js";
import mongoose from "mongoose";
import paths from "../../../utils/paths.js";
import Extinguisher from "../../../database/models/Extinguisher.js";
import app from "../../index.js";
import { type ExtinguisherData } from "../../../types.js";
import { extinguishersMock } from "../../../mocks/factories/extinguisherFactory/extinguisherFactory.js";

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

      const path = `${paths.extinguishers}`;

      const response: { body: { extinguishers: ExtinguisherData[] } } =
        await request(app).get(path).expect(expectedStatus);

      const { extinguishers } = response.body;

      expect(extinguishers).toHaveLength(3);
    });
  });
});
