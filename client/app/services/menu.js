import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from '../config/environment';
import { inject as service } from '@ember/service';

export default class MenuService extends Service {
  @service('session') session;
  @service('cart') cart;
  @service('user') user;
  @service('order') order;

  @tracked data = {};
  @tracked datas = [];

  async createMenu(data) {
    const apiURL = ENV.apiURL;
    const token = this.session.dataLogin.id;
    const url = `${apiURL}/menu_items?access_token=${token}`;
    console.log('Start Fetching API createMenu:', url);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`API failed with status ${response.status}`);
      }

      console.log('API createMenu successful!');

      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async getAllMenu() {
    const apiURL = ENV.apiURL;
    const token = this.session.dataLogin.id;
    const url = `${apiURL}/menu_items?access_token=${token}`;
    console.log('Start Fetching API getAllMenu:', url);

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

      console.log('API getAllMenu successful!');
      return (this.datas = await response.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async getOneMenu(id) {
    const apiURL = ENV.apiURL;
    const token = this.session.dataLogin.id;
    const url = `${apiURL}/menu_items/${id}?access_token=${token}`;
    console.log('Start Fetching API getOneMenu:', url);

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

      console.log('API getOneMenu successful!');
      return (this.data = await response.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async updateMenu(id, data) {
    const apiURL = ENV.apiURL;
    const token = this.session.dataLogin.id;
    const url = `${apiURL}/menu_items/${id}?access_token=${token}`;
    console.log('Start Fetching API updateMenu:', url);

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`API failed with status ${response.status}`);
      }

      console.log('API updateMenu successful!');

      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async patchMenu(id, data) {
    const apiURL = ENV.apiURL;
    const token = this.session.dataLogin.id;
    const url = `${apiURL}/menu_items/${id}?access_token=${token}`;
    console.log('Start Fetching API patchMenu:', url);

    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`API failed with status ${response.status}`);
      }

      console.log('API patchMenu successful!');

      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async deleteMenu(id) {
    const apiURL = ENV.apiURL;
    const token = this.session.dataLogin.id;
    const url = `${apiURL}/menu_items/${id}?access_token=${token}`;
    console.log('Start Fetching API deleteMenu:', url);

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`API failed with status ${response.status}`);
      }

      console.log('API deleteMenu successful!');

      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
