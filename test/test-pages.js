const expect = require('chai').expect
const request = require('supertest')
const app = require('../server.js')

describe('GET /healthcheck',() => {
    it('err should be null', (done) => {
        request(app).get('/healthcheck')
        .end((err,res) => {
            expect(err).to.be.null
            done()
        })
    })
    it('returns 200 status', (done) => {
        request(app).get('/healthcheck')
        .end((err,res) => {
            expect(res.statusCode).to.equal(200)
            done()
        })
    })
    it('body includes App is alive', (done) => {
        request(app).get('/healthcheck')
        .end((err,res) => {
            expect(res.body).to.equal('App is alive')
            done()
        })
    })
})