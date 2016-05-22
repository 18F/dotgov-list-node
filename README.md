# dotgov-list

Returns a list of United States .gov domains.

## Installation

```
npm install dotgov-list-node
```

An NPM module for fetching and parsing CSVs of US .gov domain names.

## Usage

```javascript
var DotgovListFetcher = require('dotgov-list');

var fetcher = new DotgovListFetcher('2016-05-02-federal.csv');
fetcher.perform(function(error, list) {
  console.log(list);
});
// =>
/*
{ domainName: 'IGNET.GOV',
    domainType: 'Federal Agency',
    agency: 'Council of Inspector General on Integrity and Efficiency',
    city: 'Washington',
    state: 'DC' },
  { domainName: 'OVERSIGHT.GOV',
    domainType: 'Federal Agency',
    agency: 'Council of Inspector General on Integrity and Efficiency',
    city: 'Washington',
    state: 'DC' },
  ...
*/
```

The argument in the `DotgovListFetcher` constructor is the path to any file hosted [here](https://github.com/GSA/data/tree/gh-pages/dotgov-domains).

## Development

### Run tests

```
npm test
```

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
