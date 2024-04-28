import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;

  id;
  name;
  description;
  picture;
  price;
  subtotal;
  tax;
  stock;

  constructor(item) {
    this.id = item.id;
    this.name = item.name;
    this.description = item.description;
    this.picture = item.picture;
    this.price = item.price;
    this.count = item.count;
    this.subtotal = item.subtotal;
    this.tax = item.tax;
    this.stock = item.stock;
  }
}

export default class CartService extends Service {
  @tracked itemList = [];
  @tracked qty = 0;
  @tracked subtotal = 0;
  @tracked tax_percentage = 0.11;
  @tracked tax = 0;
  @tracked total = 0;

  addItem(item) {
    const existingItem = this.itemList.find(({ id }) => id === item.id);

    if (existingItem) {
      existingItem.count += 1;
      existingItem.subtotal = existingItem.price * existingItem.count;
      this.qty = this.itemList.reduce((total, item) => total + item.count, 0);
      this.subtotal = this.itemList.reduce((total, item) => total + item.count * item.price, 0);
      this.tax = this.subtotal * this.tax_percentage;
      this.total = this.subtotal + this.tax;
    } else {
      this.itemList = [
        ...this.itemList,
        new Item({
          ...item,
          count: 1,
          subtotal: item.price,
        }),
      ];
      this.qty = this.itemList.reduce((total, item) => total + item.count, 0);
      this.subtotal = this.itemList.reduce((total, item) =>total + item.count * item.price, 0);
      this.tax = this.subtotal * this.tax_percentage;
      this.total = this.subtotal + this.tax;
    }
  }

  subItem(item) {
    const existingItem = this.itemList.find(({ id }) => id === item.id);

    if (existingItem) {
      if (existingItem.count > 1) {
        existingItem.count -= 1;
        existingItem.subtotal = existingItem.price * existingItem.count;
        this.qty = this.itemList.reduce((total, item) => total + item.count, 0);
        this.subtotal = this.itemList.reduce((total, item) =>total + item.count * item.price, 0);
        this.tax = this.subtotal * this.tax_percentage;
        this.total = this.subtotal + this.tax;
      } else {
        this.itemList = this.itemList.filter(
          (existingItem) => existingItem.name !== item.name,
        );
        this.qty = this.itemList.reduce((total, item) => total + item.count, 0);
        this.subtotal = this.itemList.reduce((total, item) =>total + item.count * item.price, 0);
        this.tax = this.subtotal * this.tax_percentage;
        this.total = this.subtotal + this.tax;
      }
    } else {
      // Handle potential error: item not found while trying to subtract
      console.error('Item not found in the list');
    }
  }
}
