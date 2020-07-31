import QUnit from 'qunit';

QUnit.assert.contain = function (a, b, message) {
  Object.keys(b).forEach((key) => {
    this.pushResult({
      result: a[key] === b[key],
      actual: a[key],
      expected: b[key],
      message: message || `object has '${key}' with value of '${b[key]}'`
    });
  });
};
