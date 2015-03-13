'use strict';

describe('Service: PHPJS', function () {

  // load the service's module
  beforeEach(module('angularTableRenderingApp'));

  // instantiate service
  var PHPJS;
  beforeEach(inject(function (_PHPJS_) {
    PHPJS = _PHPJS_;
  }));

  it('should do something', function () {
    expect(!!PHPJS).toBe(true);
  });

});
