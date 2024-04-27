import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ProfileComponent extends Component {
  @service('cart') cart;

  get fullname() {
    const { user } = this.args;
    return user.fullname ? user.fullname : 'Please input your fullname';
  }

  get username() {
    const { user } = this.args;
    return user.username ? user.username : 'Please input your username';
  }

  get password() {
    const { user } = this.args;
    return user.password ? user.password : '********';
  }

  get email() {
    const { user } = this.args;
    return user.email ? user.email : 'Please input your email';
  }

  get gender() {
    const { user } = this.args;
    return user.gender ? user.gender : 'Please input your gender';
  }

  get phone() {
    const { user } = this.args;
    return user.phone ? user.phone : 'Please input your phone';
  }
}
