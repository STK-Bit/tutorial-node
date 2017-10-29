var assert = require('assert');
var LeftPad = require('../utils/left-pad');
describe('left-pad', function() {
  describe('', function() {
    it('should return 000Bit', function() {
      assert.equal('000Bit', LeftPad('Bit',6,0));
    });
  });
});