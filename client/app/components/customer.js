import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class CustomerComponent extends Component {
  @service('session') session;

  get src() {
    return this.session.data.picture
      ? this.session.data.picture
      : 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/profile.jpg?alt=media&token=e174b357-aac6-413a-bdb4-2ccec5a6713e';
  }

  get fullname() {
    return this.session.data.fullname
      ? this.session.data.fullname
      : 'Eunha GFRIEND';
  }
}
