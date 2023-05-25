import request from "supertest";
import app from ".";

type CustomResponse = {
  status: number;
  body: { message: string };
};

describe("Given a GET '/' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with status 200 and a message '🏓 Pong'", async () => {
      const expectedStatus = 200;
      const expectedMessage = "🏓 Pong";

      const response: CustomResponse = await request(app)
        .get("/")
        .expect(expectedStatus);

      expect(response.body.message).toBe(expectedMessage);
    });
  });
});
