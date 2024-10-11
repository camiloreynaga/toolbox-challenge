const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;

chai.use(chaiHttp);

describe('API Tests', () => {
  it('Debe retornar la lista de archivos procesados', (done) => {
    chai.request(app)
      .get('/files/data')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('Debe manejar errores correctamente al fallar una petición', (done) => {
    chai.request(app)
      .get('/files/data?fileName=archivoInexistente.csv')
      .end((err, res) => {
        expect(res).to.have.status(500);
        done();
      });
  });
});
