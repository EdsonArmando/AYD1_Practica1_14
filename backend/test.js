const expect = require('chai').expect
const request = require('supertest')('http://localhost:4000')
process.env.NODE_ENV = 'test'
const app = require('./server')
const assert = require('assert');

describe('GET /usuarios', () => {
    it('Consulta correcta, petición de usuarios', async function () {
        const response = await request
            .get('/usuarios')

        expect(response.status).to.be.eql(200);
    })
})