const assert = require('assert');
const statsSpys = require('fs-stats-spys');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof statsSpys, 'function');
  });
});
