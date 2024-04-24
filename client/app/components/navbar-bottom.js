import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavbarBottomComponent extends Component {
  @service('cart') cart;
  @tracked display = 'none';

  @action
  showModal() {
    return this.display = "block";
  }

  @action
  hideModal() {
    return this.display = "none";
  }
}
