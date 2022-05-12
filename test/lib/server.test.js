const server = require("./../../lib/server");
const request = require("supertest");

describe("GET /explorers",  () =>{
  test("1) Should respond with a 200 status code", async () => {
    const response = await request(server).get("/explorers").send();

    expect(response.statusCode).toBe(200);
  });

  test("2) Should respond with an array", async () => {
    const response = await request(server).get("/explorers").send();

    expect(response.body).toBeInstanceOf(Array);
  });

  test("3) Content Type should be json", async () => {
    const response = await request(server).get("/explorers").send();
    
    expect(response.headers["content-type"]).toMatch("json");
  });
});

describe("GET /explorers/:id",() =>{
  test("1) Should respond with a 200 status code", async () => {
    const response = await request(server).get("/explorers/1").send();
    expect(response.statusCode).toBe(200);
  });
  test("2) Should respond with an object", async () => {
    const response = await request(server).get("/explorers/1").send();
    expect(response.body).toBeInstanceOf(Object);
  });
  test("3) Shoul be different from null", async () => {
    const response = await request(server).get("/explorers/1").send();
    expect(response.body).not.toBeNull();
  });
  test("4) Shoul be different from null", async () => {
    const response = await request(server).get("/explorers/5").send();
    expect(response.body).toBeNull();
  });
});

