import app from "../src/app";

import request from "supertest";

//COMENZANDO A TESTEAR
describe("GET /tasks", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond with an array", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("POST /tasks", () => {
  //Should respons with a 200 status code
  test("shouuld respond with a 200 status code", async () => {
    const response = await request(app).post("/tasks").send();
    expect(response.statusCode).toBe(200);
  });
  //should respond with a content-type of application/json
  test("should have a content-type: application.json in header", async () => {
    const response = await request(app).post("/tasks").send();
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
  //should respond with a json object containing the new task with an id
});
