import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;

  name;
  description;
  picture;
  price;
  subtotal;
  tax;

  constructor(item) {
    this.name = item.name;
    this.description = item.description;
    this.picture = item.picture;
    this.price = item.price;
    this.count = item.count;
    this.subtotal = item.subtotal;
    this.tax = item.tax;
  }
}

export default class CartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const existingItem = this.itemList.find(({ name }) => {
      return name === item.name;
    });

    if (existingItem) {
      existingItem.count += 1;
      existingItem.subtotal = existingItem.price * existingItem.count;
    } else {
      this.itemList = [
        ...this.itemList,
        new Item({
          ...item,
          count: 1,
          subtotal: item.price,
        }),
      ];
    }
  }

  subItem(item) {
    const existingItem = this.itemList.find(({ name }) => name === item.name);

    if (existingItem) {
      if (existingItem.count > 1) {
        existingItem.count -= 1;
        existingItem.subtotal = existingItem.price * existingItem.count;
      } else {
        this.itemList = this.itemList.filter(
          (existingItem) => existingItem.name !== item.name,
        );
      }
    } else {
      // Handle potential error: item not found while trying to subtract
      console.error('Item not found in the list');
    }
  }
}
