import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from '../config/environment';
import { inject as service } from '@ember/service';

export default class OrderService extends Service {
  @service('menu') menu;
  @service('cart') cart;
  @service('user') user;
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

      
      const newOrder = await response.json();
      this.data = newOrder;

      this.cart.itemList.forEach(item => {
        const payload = {
          order_id: this.data.id,
          menu_item_id: parseInt(item.id),
          qty: parseInt(item.count),
          price: parseInt(item.price),
          subtotal: parseInt(item.subtotal),
          item_status: "waiting-payment"
        };
        this.createOrderItems(payload);

        const currentStock = item.stock - item.count;
        const payloadMenu = {
          stock: currentStock
        };
        this.menu.patchMenu(item.id, payloadMenu);
      });
      this.cart.itemList = [];

      const payloadOrderStates = {
        order_id: this.data.id,
        order_status: "waiting-payment"
      };
      this.createOrderStates(payloadOrderStates);

      console.log('API createOrder successful!');
      return this.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async createOrderItems(data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/order_items`;
    console.log('Start Fetching API createOrderItems:', url);

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

      console.log('API createOrderItems successful!');
      const resp = await response.json();
      return resp;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async createOrderStates(data) {
    const apiURL = ENV.apiURL;
    const url = `${apiURL}/order_states`;
    console.log('Start Fetching API createOrderStates:', url);

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

      console.log('API createOrderStates successful!');
      const resp = await response.json();
      return resp;
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
