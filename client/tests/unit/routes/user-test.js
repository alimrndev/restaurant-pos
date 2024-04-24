import { module, test } from 'qunit';
import { setupTest } from 'client/tests/helpers';

module('Unit | Route | user', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:user');
    assert.ok(route);
  });
});
