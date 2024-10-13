const request = require('supertest');
const Server = require('../models/server');

const server = new Server();


describe('GET /api/farmacia', () => {
    test('respuesta código 200', async () => {
        const response = await request(server.app).get('/api/farmacia').send();
        expect(response.statusCode).toBe(200);
    });

    test('respuesta contiene información de la farmacia', async () => {
        const response = await request(server.app).get('/api/farmacia').send();
        expect(response.body).toHaveProperty('msg', 'Información de la farmacia');
        expect(response.body).toHaveProperty('nombre');
        expect(response.body).toHaveProperty('lugar');
    });

    test('tipo de contenido es JSON', async () => {
        const response = await request(server.app).get('/api/farmacia').send();
        expect(response.headers['content-type']).toMatch('application/json');
    });
});


describe("POST /api/farmacia", () => {
    test("Crear farmacia", async () => {
        const storeData = {
            nombre: "Nueva farmacia",
            lugar: "Ciudad Nueva"
        };

        const response = await request(server.app)
            .post('/api/farmacia')
            .send(farmaciaData);
        
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('msg', 'Farmacia creada exitosamente');
        expect(response.body).toHaveProperty('nombre', farmaciaData.nombre);
        expect(response.body).toHaveProperty('lugar', farmaciaData.lugar);
    });

    test('Intentar crear farmacia sin nombre y lugar', async () => {
        const response = await request(server.app)
            .post('/api/farmacia')
            .send({});
        expect(response.statusCode).toBe(400);
    });
});


describe("PUT /api/farmacia/:id", () => {
    test("Actualizar farmacia existente", async () => {
        const farmaciaId = 1;
        const updatedFarmacia = {
            nombre: "Farmacia actualizada",
            lugar: "Ciudad Actualizada"
        };

        const response = await request(server.app)
            .put(`/api/farmacia/${farmaciaId}`)
            .send(updatedFarmacia);
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('nombre', updatedFarmacia.nombre);
        expect(response.body).toHaveProperty('lugar', updatedFarmacia.lugar);
    });

    test("Intentar actualizar farmacia con datos incorrectos", async () => {
        const farmaciaId = 1;
        const updatedFarmacia = {
            descripcion: "Farmacia actualizada" 
        };

        const response = await request(server.app)
            .put(`/api/farmacia/${farmaciaId}`)
            .send(updatedFarmacia);
        
        expect(response.statusCode).toBe(400);
    });

    test("Intentar actualizar farmacia con ID no existente", async () => {
        const nonExistentFarmaciaId = 9999;
        const updatedFarmacia = {
            nombre: "Farmacia actualizada",
            lugar: "Ciudad Actualizada"
        };

        const response = await request(server.app)
            .put(`/api/farmacia/${nonExistentFarmaciaId}`)
            .send(updatedFarmacia);
        
        expect(response.statusCode).toBe(200);
    });
});


describe("DELETE /api/farmacia/:id", () => {
    test("Eliminar Farmacia existente", async () => {
        const farmaciaId = 1;

        const response = await request(server.app)
            .delete(`/api/farmacia/${farmaciaId}`);
        
        expect(response.statusCode).toBe(410);
    });

    test("Intentar eliminar farmacia con ID inválido", async () => {
        const invalidFarmaciaId = 'abc';

        const response = await request(server.app)
            .delete(`/api/farmacia/${invalidFarmaciaId}`);
        
        expect(response.statusCode).toBe(410);
    });

    test("Intentar eliminar farmacia con ID no existente", async () => {
        const nonExistentFarmaciaId = 9999;

        const response = await request(server.app)
            .delete(`/api/farmacia/${nonExistentFarmaciaId}`);
        
        expect(response.statusCode).toBe(410);
    });
});


describe('GET /api/nonexistent', () => {
    test('respuesta código 404', async () => {
        const response = await request(server.app).get('/api/nonexistent').send();
        expect(response.statusCode).toBe(404);
    });
});