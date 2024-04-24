import { module, test } from 'qunit';
import { setupTest } from 'client/tests/helpers';

module('Unit | Controller | invoice', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:invoice');
    assert.ok(controller);
  });
});
