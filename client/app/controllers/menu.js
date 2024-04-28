import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class MenuController extends Controller {
  @service('session') session;
  @service('cart') cart;
  @service('user') user;
  @service('menu') menu;
  @service('order') order;

  @tracked category = 'all';

  get isEmpty() {
    if (this.cart.itemList.length) {
      return false;
    } else {
      return true;
    }
  }

  get isMenuEmpty() {
    if (this.menu.datas.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  get menuByCategory() {
    if (this.category === 'all') {
      return this.menu.datas.length > 0 ? this.menu.datas : [];
    }
    const filteredMenu = this.menu.datas.filter(
      (item) => item.category === this.category,
    );
    return filteredMenu.length > 0 ? filteredMenu : [];
  }

  get menuPackage() {
    if (this.menu.datas.length > 0) {
      return this.menu.datas.filter((item) => item.category === 'package');
    } else {
      return [];
    }
  }

  get menuFoods() {
    if (this.menu.datas.length > 0) {
      return this.menu.datas.filter((item) => item.category === 'foods');
    } else {
      return [];
    }
  }

  get menuDrinks() {
    if (this.menu.datas.length > 0) {
      return this.menu.datas.filter((item) => item.category === 'drinks');
    } else {
      return [];
    }
  }

  get menuAlacarte() {
    if (this.menu.datas.length > 0) {
      return this.menu.datas.filter((item) => item.category === 'alacarte');
    } else {
      return [];
    }
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
