import { module, test } from 'qunit';
import { setupRenderingTest } from 'client/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | trending-menu', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TrendingMenu />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TrendingMenu>
        template block text
      </TrendingMenu>
    `);

    assert.dom().hasText('template block text');
  });
});
