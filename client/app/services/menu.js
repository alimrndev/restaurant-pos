import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from '../config/environment';

export default class MenuService extends Service {
  @tracked data = {};
  @tracked datas = [];

  async createMenu(data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/menu_items`;
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
      console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async getAllMenu() {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/menu_items`;
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
      const resp = await response.json();
      return (this.datas = resp.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async getOneMenu(id) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/menu_items/${id}`;
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
    const url = `${apiURL}/menu_items/${id}`;
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
      console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async patchMenu(id, data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/menu_items/${id}`;
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
      console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async deleteMenu(id) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/menu_items/${id}`;
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
      console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
