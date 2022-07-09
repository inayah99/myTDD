const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");
const mathModel = require("../../../storage/models/math.model");

jest.mock("../../../storage/models/math.model", () => {
    return {
        isweekend: jest.fn()
    };
})

test("isweekend", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-weekend",
        body: {
            date: "July 1, 2022",
            
        },
    });
    const response = httpMocks.createResponse();
    mathModel.isweekend.mockResolvedValue('true');
    await mathHandler.isweekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: 'true',
        error: null
    });
});

test("isweekend", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-weekend",
        body: {
            date: "July 3, 2022",
            
        },
    });
    const response = httpMocks.createResponse();
    mathModel.isweekend.mockResolvedValue('false');
    await mathHandler.isweekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: 'false',
        error: null
    });
});
