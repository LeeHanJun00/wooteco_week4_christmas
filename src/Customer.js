import { Console } from '@woowacourse/mission-utils';
import InputView from './views/InputView.js';
import Validator from './utils/Validator.js';
import { MENU } from './constants/Constant.js';

class Customer {
  constructor() {
    this.visitDate = 0;
    this.menuList = {};
    this.totalAmount = 0;
  }

  async totalPrice() {
    //STUDY
    this.totalAmount = Object.keys(this.menuList).reduce((amount, name) => {
      if (MENU.hasOwnProperty(name)) {
        return amount + MENU[name] * this.menuList[name];
      }
      return amount;
    }, 0);

    // for (const [menu, quantity] of Object.entries(this.menuList)) {
    //   if (MENU[menu]) {
    //     this.totalAmount += MENU[menu] * quantity;
    //   }
    // }
  }

  async inputDate() {
    try {
      const date = await InputView.date();
      this.checkDate(date);
      this.visitDate = Number(date);
    } catch (error) {
      Console.print(error.message);

      return this.inputDate();
    }
  }

  checkDate(date) {
    Validator.dateRange(date);
  }

  async inputMenu() {
    try {
      const inputMenu = await InputView.menu();
      const splitInputMenu = inputMenu.split(',');
      this.checkNameOfMenu(splitInputMenu);
      this.checkNumberOfMenu(splitInputMenu);
      this.splitMenuList(splitInputMenu);

      return;
    } catch (error) {
      Console.print(error.message);

      return this.inputMenu();
    }
  }

  splitMenuList(splitInputMenu) {
    //STUDY
    splitInputMenu.forEach((item) => {
      const [name, quantity] = item.trim().split('-');
      this.menuList[name] = parseInt(quantity);
    });
  }

  checkNameOfMenu(menuList) {
    //STUDY
    const menuNameArray = menuList.map((menu) => {
      //[이름, 개수]로 분할된 값중에서 이름을 name 으로 저장하고 리턴
      const [name] = menu.split('-');
      return name;
    });

    Validator.menuName(menuNameArray);
    Validator.orderOnlyDrink(menuNameArray);
    Validator.sameMenuName(menuNameArray);
  }

  checkNumberOfMenu(menuList) {
    //STUDY
    const menuNumberArray = menuList.map((menu) => {
      //[이름, 개수]로 분할된 값중에서 이름을 name 으로 저장하고 리턴
      const [name, number] = menu.split('-');
      return number;
    });

    Validator.menuNumber(menuNumberArray);
    Validator.maximumOrder(menuNumberArray);
  }
}

export default Customer;
