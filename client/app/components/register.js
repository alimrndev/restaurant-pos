import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RegisterComponent extends Component {
  @service('session') session;
  @service('cart') cart;
  @service('user') user;
  @service('menu') menu;
  @service('order') order;

  @tracked username = '';
  @tracked password = '';
  @tracked email = '';
  @tracked fullname = '';
  @tracked isRequestError = false;

  @action
  hideModal() {
    this.session.isRegister = false;
    return;
  }

  @action
  hideModalError() {
    this.session.isError = false;
    return;
  }

  @action
  hideModalRequestError() {
    this.isRequestError = false;
    return;
  }

  @action
  submitRegister() {
    const emailFormat = /\S+@\S+\.\S+/;
    if (
      !this.username ||
      !this.password ||
      !this.email.match(emailFormat) ||
      !this.fullname
    ) {
      this.isRequestError = true;
      return;
    }
    const body = {
      username: this.username,
      password: this.password,
      email: this.email,
      fullname: this.fullname,
      role: 'customer',
    };
    this.session.register(body);
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

  @action
  onInputEmail() {
    return (this.email = document.getElementById('email').value);
  }

  @action
  onInputFullname() {
    return (this.fullname = document.getElementById('fullname').value);
  }
}
