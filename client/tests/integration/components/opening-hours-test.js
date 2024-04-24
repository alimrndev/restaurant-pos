import { module, test } from 'qunit';
import { setupRenderingTest } from 'client/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | opening-hours', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<OpeningHours />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <OpeningHours>
        template block text
      </OpeningHours>
    `);

    assert.dom().hasText('template block text');
  });
});
