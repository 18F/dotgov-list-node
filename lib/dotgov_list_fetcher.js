"use strict";

var request = require('request');
var parse = require('csv-parse');

class DotgovListFetcher {
  constructor(domainsPath) {
    this.domainsPath = domainsPath;
  }

  perform(callback) {
    var basePath = 'https://raw.githubusercontent.com/GSA/data/gh-pages/dotgov-domains';
    var url = `${basePath}/${this.domainsPath}`;

    request(url, function(error, response, body) {
      parse(body, function(err, output) {
        output.shift(); // remove the header row

        var list = output.map(function(item) {
          return {
            domainName: item[0],
            domainType: item[1],
            agency: item[2],
            city: item[3],
            state: item[4]
          };
        });

        callback(error, list);
      });
    });

  }
}

module.exports = DotgovListFetcher;
