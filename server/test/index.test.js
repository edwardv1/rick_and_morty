const app = require('../src/app.js');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {

    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            //const response = await agent.get('/rickandmorty/character/1');
            //expect(response.statusCode).toBe(200);
            //console.log(response);
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it("Responde un objeto con las propiedades: id, name, species, gender, status, origin e image", async () => {
            //const response = await agent.get('/rickandmorty/character/1');
            //["id", "name",..."image"]
            //expect(Object.keys(response.body)).toEqual([
            //    "id", "name", "gender", "species", "origin", "image", "status" 
            //])
            const response = (await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty("id");
            expect(response).toHaveProperty("name");
            expect(response).toHaveProperty("gender");
            expect(response).toHaveProperty("species");
            expect(response).toHaveProperty("origin");
            expect(response).toHaveProperty("image");
            expect(response).toHaveProperty("status");
        })
        it("Si hay un error responde con status: 500", async () => {
            //const response = await agent.get('/rickandmorty/character/10000');
            //expect(response.statusCode).toBe(500);
            await agent.get('/rickandmorty/character/10000').expect(500);
        })
    })

    describe("GET /rickandmorty/login", () => {
        it("Debería retornar access: true cuando se envía la información de login correcta", async () => {
            const response = await agent.get("/rickandmorty/login?email=ejemplo@gmail.com&password=123456");
            console.log(response.body.access);
            expect(response.body.access).toBe(true);
        })
        it("Debería retornar access: false cuando se envía la información de login incorrecta", async () => {
            const response = await agent.get("/rickandmorty/login?email=ejemplo@gmail.com&password=654321");
            console.log(response.body.access);
            expect(response.body.access).toBe(false);
        })
    })

    describe("POST /rickandmorty/fav", () => {
        const char1 = { id: "1", name: "Rick"};
        const char2 = { id: "2", name: "Morty"};   

        it("Lo que envíes por body debe ser devuelto en un arreglo", async () => {
            const response = await agent
                .post("/rickandmorty/fav")
                .send(char1);
            expect(response.body).toEqual([char1]);
        })
        it("Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente", async () => {
            const response = await agent
                .post("/rickandmorty/fav")
                .send(char2);
            expect(response.body).toEqual([char1, char2]);
            //expect(response.body).toContainEqual(char1);
            //expect(response.body).toContainEqual(char2);
        })
    })
    
    describe("DELETE /rickandmorty/fav/:id", () => {
        const char1 = { id: "1", name: "Rick"};
        const char2 = { id: "2", name: "Morty"}; 

        it("En el caso de que no haya ningún personaje con el ID que envías, sea un arreglo con los elementos previos sin modificar", async () => {
            const response = await agent.delete("/rickandmorty/fav/55"); //distinto al 1 y 2 ya creados
            expect(response.body).toContainEqual(char1);
            expect(response.body).toContainEqual(char2);
        })
        it("Debes testear que cuando envías un ID válido se elimine correctamente al personaje.", async () => {
            const response = await agent.delete("/rickandmorty/fav/1"); 
            expect(response.body).not.toContainEqual(char1);
        })
    })
    
      
})