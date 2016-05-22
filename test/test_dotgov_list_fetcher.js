var expect = require('chai').expect;
var nock = require('nock');
var M = require('mstring');

var DotgovListFetcher = require('.././lib/dotgov_list_fetcher');

nock.disableNetConnect();

var fakeCsv = M(function(){
  /***
  Domain Name,Domain Type,Agency,City,State
  ACUS.GOV,Federal Agency,Administrative Conference of the United States,WASHINGTON,DC
  ACHP.GOV,Federal Agency,Advisory Council on Historic Preservation,Washington,DC
  PRESERVEAMERICA.GOV,Federal Agency,Advisory Council on Historic Preservation,Washington,DC
  ADF.GOV,Federal Agency,African Development Foundation,Washington,DC
  ***/
});

nock('https://raw.githubusercontent.com/GSA/data/gh-pages/dotgov-domains')
  .get('/2016-05-02-federal.csv')
  .reply(200, fakeCsv);

describe('DotgovListFetcher', function() {
  describe('#perform()', function() {
    it('returns an array of objects', function(done) {
      var path = '2016-05-02-federal.csv'
      var dotgovListFetcher = new DotgovListFetcher(path);

      dotgovListFetcher.perform(function(error, list) {
        expect(list).to.be.a('array');

        list.forEach(function(listItem) {
          expect(listItem).to.be.a('object');
          expect(listItem).to.include.keys('domainName',
                                           'domainType',
                                           'agency',
                                           'city',
                                           'state');

        });

        done();
      });
    });
  });
});
