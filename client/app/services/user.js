import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from '../config/environment';

export default class UserService extends Service {
  @tracked data = {};
  @tracked datas = [];

  async createUser(data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/users`;
    console.log('Start Fetching API createUser:', url);

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

      console.log('API createUser successful!');
      console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async getAllUser() {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/users`;
    console.log('Start Fetching API getAllUser:', url);

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

      console.log('API getAllUser successful!');
      return (this.datas = await response.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async getOneUser(id) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/users/${id}`;
    console.log('Start Fetching API getOneUser:', url);

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

      console.log('API getOneUser successful!');
      return (this.data = await response.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async updateUser(id, data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/users/${id}`;
    console.log('Start Fetching API updateUser:', url);

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

      console.log('API updateUser successful!');
      console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async patchUser(id, data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/users/${id}`;
    console.log('Start Fetching API patchUser:', url);

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

      console.log('API patchUser successful!');
      console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async deleteUser(id) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/users/${id}`;
    console.log('Start Fetching API deleteUser:', url);

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

      console.log('API deleteUser successful!');
      console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
