import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MenuController extends Controller {
  @service('cart') cart;
  @tracked category = 'all';

  get qty() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
  }

  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  get tax() {
    return 0.11 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  get isEmpty() {
    if (this.cart.itemList.length) {
      return false;
    } else {
      return true;
    }
  }

  @action
  onCategory(newCategory) {
    this.category = newCategory;
  }

  @action
  onSelectMenu(newMenu) {
    this.listMenu = { ...(this.listMenu + newMenu) };
    this.qty++;
  }

  get menu() {
    return this.model.data;
  }

  get menuByCategory() {
    if (this.category === 'all') {
      return this.menu;
    }
    return this.menu.filter((item) => item.category === this.category);
  }

  get menuPackage() {
    return this.menu.filter((item) => item.category === 'package');
  }

  get menuFoods() {
    return this.menu.filter((item) => item.category === 'foods');
  }

  get menuDrinks() {
    return this.menu.filter((item) => item.category === 'drinks');
  }

  get menuAlacarte() {
    return this.menu.filter((item) => item.category === 'alacarte');
  }

  get isAll() {
    if (this.category === 'all') {
      return 'active';
    } else {
      return '';
    }
  }

  get isPackage() {
    if (this.category === 'package') {
      return 'active';
    } else {
      return '';
    }
  }

  get isFoods() {
    if (this.category === 'foods') {
      return 'active';
    } else {
      return '';
    }
  }

  get isDrinks() {
    if (this.category === 'drinks') {
      return 'active';
    } else {
      return '';
    }
  }

  get isAlacarte() {
    if (this.category === 'alacarte') {
      return 'active';
    } else {
      return '';
    }
  }
}
