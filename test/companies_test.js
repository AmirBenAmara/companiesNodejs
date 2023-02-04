process.env.NODE_ENV = 'test';

const routes = require('../routes/routes')
//Require the dev-dependencies
const request = require('supertest');
const express = require('express')
const app = express();
app.use('/api', routes);


describe('CompanyApiTest', () => {

  describe('Test the api with param EXPERDECO', () => {
    it('should : \n return the phone number as string \n length 10 \n equal to 04 50 34 63 54 \n status code 200', () => {
      request(app)
        .get('/getPhoneNumber/EXPERDECO')
        .send({})
        .expect(200)
        .then((res) => {
          expect(res.status).to.be.eql(200);
          expect(res.body).to.be.a('string');
          expect(res.body.length).to.be.eql(10);
          expect(res.body).to.be.eql('04 50 34 63 54');
        });
    });
  });

  
  describe('Test the api with param ATMOSPHERE', () => {
    it('/ should : \n return the phone number as string \n length 10 \n equal to 05 67 73 38 63 \n status code 200', () => {
      request(app)
        .get('/getPhoneNumber/ATMOSPHERE')
        .send({})
        .expect(200)
        .then((res) => {
          expect(res.status).to.be.eql(200);
          expect(res.body).to.be.a('string');
          expect(res.body.length).to.be.eql(10);
          expect(res.body).to.be.eql('05 67 73 38 63');
        });
    });
  });


  describe('Test the api with param dvqdfqefqef', () => {
    it('should : \n return text msg : no Company found with this name \n status code 404', () => {
      request(app)
        .get('/getPhoneNumber/dvqdfqefqef')
        .send({})
        .expect(200)
        .then((res) => {
          expect(res.status).to.be.eql(404);
          expect(res.body).to.be.a('string');
          expect(res.body).to.be.eql('no Company found with this name');
        });
    });
  });

});