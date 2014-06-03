var _ = require('lodash');

var defaults = {

  any: {
    schema: {
      type: 'any'
    }
  },

  array: {
    schema: {
      type: 'array'
    }
  },

  checkbox: {
    schema: {
      type: 'boolean'
    }
  },

  file: {
    options: {
      type: 'file'
    },
    schema: {
      type: 'string',
      format: 'uri'
    }
  }

};

module.exports = _.mapValues(defaults, function(d) {
  return function(options, cb) {
    _.defaults(options, d);
    this.alpaca(options, cb);
  };
});