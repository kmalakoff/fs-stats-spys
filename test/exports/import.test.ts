import assert from 'assert';
import statsSpys from 'fs-stats-spys';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof statsSpys, 'function');
  });
});
