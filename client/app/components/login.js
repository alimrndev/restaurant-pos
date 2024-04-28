import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoginComponent extends Component {
  @service('session') session;
  @service('cart') cart;
  @service('user') user;
  @service('menu') menu;
  @service('order') order;

  @tracked username = '';
  @tracked password = '';
  @tracked isRequestError = false;

  @action
  hideModalRequestError() {
    this.isRequestError = false;
    return;
  }

  @action
  submitLogin() {
    if (!this.username || !this.password) {
      this.isRequestError = true;
      return;
    }
    const body = {
      username: this.username,
      password: this.password,
    };
    this.session.login(body);
    return;
  }

  @action
  onInputUsername() {
    return (this.username = document.getElementById('username').value);
  }

  @action
  onInputPassword() {
    return (this.password = document.getElementById('password').value);
  }
}
