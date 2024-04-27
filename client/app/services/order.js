import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from '../config/environment';

export default class OrderService extends Service {
  @tracked data = {};
  @tracked datas = [];

  async createOrder(data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/orders`;
    console.log('Start Fetching API createOrder:', url);

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

      console.log('API createOrder successful!');
      console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async getAllOrder() {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/orders`;
    console.log('Start Fetching API getAllOrder:', url);

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

      console.log('API getAllOrder successful!');
      return (this.datas = await response.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async getOneOrder(id) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/orders/${id}`;
    console.log('Start Fetching API getOneOrder:', url);

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

      console.log('API getOneOrder successful!');
      return (this.data = await response.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async updateOrder(id, data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/orders/${id}`;
    console.log('Start Fetching API updateOrder:', url);

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

      console.log('API updateOrder successful!');
      console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async patchOrder(id, data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/orders/${id}`;
    console.log('Start Fetching API patchOrder:', url);

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

      console.log('API patchOrder successful!');
      console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async deleteOrder(id) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/orders/${id}`;
    console.log('Start Fetching API deleteOrder:', url);

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

      console.log('API deleteOrder successful!');
      console.log(await response.json());
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

}
