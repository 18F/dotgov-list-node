var DomainFetcher = require('.././lib/domain_fetcher');

var expect = require('chai').expect;

describe('DomainFetcher', function() {
  describe('#perform()', function() {
    it('returns an array', function() {
      var domainFetcher = new DomainFetcher();

      expect( domainFetcher.perform() ).to.be.a('array');
    });
  });
});
