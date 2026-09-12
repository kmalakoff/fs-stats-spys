import assert from 'assert';
import statsSpys from 'fs-stats-spys';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof statsSpys, 'function');
  });
});
