'use strict';

var expect = require('chai').expect;
var hello = require('../hello');


describe('hello', function() {
  it('should greet someone', function() {
    expect(hello.greet('captain')).to.equal('hello captain');
  });
});


