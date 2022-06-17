const { setupTestEnv } = require('./setupTestEnv');

const app = setupTestEnv();

describe("Integretion tests for CRUD opertaions connected to test postgres Db", () => {
    test("should create an todo via POST route", async () => {
        const todo = {
            name: "test",
            description: "test",
            groos_amount: 20
        }
        const response = await app.inject({
            method: 'POST',
            url: '/v2/',
            payload: todo
        })

        expect(response.statusCode).toBe(201);
        expect(response.json()).toMatchObject(todo);

    })

    test("Should get a list of todos via GET route", async () => {
        const response = await app.inject({
            method: "GET",
            url: "/v2",
        });

        expect(response.statusCode).toBe(200);

    });

    test("Should delete a todo", async () => {
        const response = await app.inject({
            method: "DELETE",
            url: "/v2/2",
        });

        expect(response.statusCode).toBe(200);
        expect(response).toMatchObject({
            "body": "{\"message\":\"Todo deleted\"}",
        });
    });



    // test("Should get a single todo", async () => {
    //     const response = await app.inject({
    //       method: "GET",
    //       url: "/v2/2",
    //     });
    
    //     expect(response.statusCode).toBe(200);
    //     expect(response.json()).toHaveProperty(
    //       "name",
    //       "description",
    //       "groos_amount",
    //       "net_amount",
    //       "excluded_vat_amount"
    //     );
    //   });

    //   test("Should update a todo", async () => {
    //     const todo = {
    //         name: "test",
    //         description: "test",
    //         groos_amount: 20
    //     }   

    //     const response = await app.inject({
    //         method: "PUT",
    //         url: "/v2/1",
    //         payload: todo
    //     });

    //     expect(response.statusCode).toBe(200);
    //     expect(response.json()).toMatchObject(todo);

    // })
    //     const todo = {
    //       name: "Updated todo",
    //       description: "Updated todo",
    //       "groos_amount": "100"
    //     };

    //     const response = await app.inject({
    //       method: "PUT",
    //       url: "/v2/2",
    //       payload: todo,
    //     });

    //     expect(response.statusCode).toBe(200);
    //     expect(response.json()).toEqual(objectContaining(todo));
    //   });

    // test("Should get a single todo", async () => {
    //     const todo = {
    //         name: "test",
    //         description: "test",
    //         groos_amount: 20
    //     }
    //     const response = await app.inject({
    //         method: 'PUT',
    //         url: '/v2/',
    //         payload: todo
    //     })

    //     expect(response.statusCode).toBe(201);
    //     expect(response.json()).toMatchObject(todo);

    //     const response1 = await app.inject({
    //         method: "GET",
    //         url: "/v2/" + response.json()["id"],
    //     });
    //     // console.log("response",response);
    //     expect(response1.statusCode).toBe(200);
    //     expect(response1.json()).toMatchObject(todo);
    // });


})



