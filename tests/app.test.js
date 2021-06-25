import supertest from "supertest";
import app from "../src/app.js"
import testDatabase from "../src/testDatabase.js";

// beforeEach(async() => {  })

//afterAll(() => connection.end())

describe('GET /test', () => {
    it("returns 200 for valis params", async () => {

        const result = await supertest(app).get("/test")
        expect(result.status).toEqual(200);
    })
})