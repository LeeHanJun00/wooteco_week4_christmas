import { Console } from '@woowacourse/mission-utils';
import InputView from './views/InputView.js';
import Validator from './utils/Validator.js';

class Customer {
  constructor() {
    this.visitDate = 0;
    this.menuList = {};
  }

  async inputDate() {
    try {
      const date = await InputView.date();
      this.checkDate(date);
      this.visitDate = Number(date);

      return;
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

      //STUDY
      const menuList = splitInputMenu.forEach((item) => {
        const [name, quantity] = item.trim().split('-');
        this.menuList[name] = parseInt(quantity);
      });

      return menuList;
    } catch (error) {
      Console.print(error.message);

      return this.inputMenu();
    }
  }

  checkMenu(date) {
    Validator.dateRange(date);
  }
}
export default Customer;
