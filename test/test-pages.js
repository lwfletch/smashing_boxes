var expect  = require('chai').expect;
var request = require('request');

it('Tests for Hello World', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(body).to.equal('Hello World!');
        done();
    });
});