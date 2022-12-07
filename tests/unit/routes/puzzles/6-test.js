import { module, test } from 'qunit';
import { setupTest } from 'advent-of-code-2022/tests/helpers';

module('Unit | Route | puzzles/6', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:puzzles/6');
    assert.ok(route);
  });
});
