import { module, test } from 'qunit';
import { setupTest } from 'advent-of-code-2022/tests/helpers';

module('Unit | Controller | puzzles/4', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:puzzles/4');
    assert.ok(controller);
  });
});
