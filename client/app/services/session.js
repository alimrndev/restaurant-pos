import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from '../config/environment';
import { inject as service } from '@ember/service';

export default class SessionService extends Service {
  @service('cart') cart;
  @service('user') user;
  @service('menu') menu;
  @service('order') order;

  @tracked isError = false;
  @tracked isRegister = false;
  @tracked isLogin = false;
  @tracked dataLogin = {};
  @tracked data = {};
  @tracked datas = [];

  async login(data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/users/login`;
    console.log('Start Fetching API login:', url);

    if (!data.username || !data.password) {
      throw new Error('Username and password are required');
    }

    const body = {
      username: data.username,
      password: data.password,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`API failed with status ${response.status}`);
      }

      console.log('API login successful!');
      const resp = await response.json();

      localStorage.setItem('dataLogin', JSON.stringify(resp));
      this.dataLogin = JSON.parse(localStorage.getItem('dataLogin'));
      this.checkLogin();
      return this.dataLogin;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async register(data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/users`;
    console.log('Start Fetching API register:', url);

    if (!data.username || !data.password || !data.email || !data.fullname) {
      throw new Error('Username, password, email and fullname are required');
    }

    const body = {
      username: data.username,
      password: data.password,
      email: data.email,
      fullname: data.fullname,
      role: 'customer',
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        this.isRegister = false;
        this.isError = true;
        throw new Error(`API request failed with status ${response.status}`);
      }

      console.log('API register successful!');
      const resp = await response.json();
      this.data = resp;
      this.isRegister = true;
      this.isError = false;
      return this.data;
    } catch (error) {
      this.isRegister = false;
      this.isError = true;
      console.error('Error fetching data:', error);
      return error;
    }
  }

  async checkLogin() {
    const apiURL = ENV.apiURL;
    const token = this.dataLogin.id;
    const userId = this.dataLogin.userId;
    const url = `${apiURL}/users/${userId}?access_token=${token}`;
    console.log('Start Fetching API checkLogin:', url);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      console.log('API checkLogin successful!');
      const resp = await response.json();
      this.data = resp;
      this.isLogin = true;
      console.log('this.dataLogin', this.dataLogin);
      console.log('this.data', this.data);
      return this.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  getDataLogin() {
    this.dataLogin = JSON.parse(localStorage.getItem('dataLogin'));
    if (this.dataLogin) {
      this.checkLogin(this.dataLogin.userId);
    }
    return this.dataLogin;
  }

  logout() {
    this.data = {};
    this.dataLogin = {};
    this.isLogin = false;
    localStorage.removeItem('dataLogin');
  }
}
