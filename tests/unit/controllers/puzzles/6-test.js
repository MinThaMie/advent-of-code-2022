import { module, test } from 'qunit';
import { setupTest } from 'advent-of-code-2022/tests/helpers';

module('Unit | Controller | puzzles/6', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:puzzles/6');
    assert.ok(controller);
  });
});
