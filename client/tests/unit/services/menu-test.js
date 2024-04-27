import { module, test } from 'qunit';
import { setupTest } from 'client/tests/helpers';

module('Unit | Service | menu', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:menu');
    assert.ok(service);
  });
});
