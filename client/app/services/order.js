import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from '../config/environment';
import { inject as service } from '@ember/service';

export default class OrderService extends Service {
  @service('menu') menu;
  @tracked data = {};
  @tracked datas = [];

  async getAllOrderByUserId(userId = 6) {
    const apiURL = ENV.apiURL;
    const cusomerId = userId.toString();
    const filter = encodeURIComponent(JSON.stringify({"where":{"customer_id": {"eq": cusomerId}}}));
    const url = `${apiURL}/orders?filter=${filter}`;
    console.log('Start Fetching API getAllOrder:', url);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      console.log('API getAllOrder successful!');
      const orders = await response.json();
      this.datas = orders;
      orders.forEach(order => {
        this.getAllOrderItems(order.id);
      });
      return orders;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async getAllOrderItems(order_id) {
    const apiURL = ENV.apiURL;
    const orderId = order_id.toString();
    console.log('orderId:', orderId);
    const filter = encodeURIComponent(JSON.stringify({"where":{"order_id": {"eq": orderId}}}));
    const url = `${apiURL}/order_items?filter=${filter}`;

    console.log('Start Fetching API getAllOrderItems:', url);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        return null;
      }

      console.log('API getAllOrderItems successful!');
      const history = await response.json();
      const mappedHistory = history.map(item => {
        const menuItemId = item.menu_item_id;
        const menuData = this.menu.datas.find(data => data.id === menuItemId);
        const menuName = menuData ? menuData.name : 'Unknown Menu';
        return {
          ...item,
          menu_name: menuName
        };
      });

      const isHistoryExist = this.datas.some(item => item.id === order_id && item.history);
      if (!isHistoryExist) {
        this.datas = this.datas.map(item => {
          if (item.id === order_id) {
            return {
              ...item,
              history: mappedHistory
            };
          }
          return item;
        });
      }

      return history;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

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
      const newOrder = await response.json();
      return newOrder;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async createOrderItems(data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/order_items`;
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
      const newOrderItems = await response.json();
      return newOrderItems;
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
