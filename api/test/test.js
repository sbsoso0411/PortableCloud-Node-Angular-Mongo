var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');

var should = chai.should();
chai.use(chaiHttp);

describe('serverAuth', function() {
    it('provide request tokens')
});