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
      this.checkSameMenu(splitInputMenu);

      // //STUDY (메뉴 객체 생성)
      // splitInputMenu.forEach((item) => {
      //   const [name, quantity] = item.trim().split('-');
      //   this.menuList[name] = parseInt(quantity);
      // });

      // this.checkMenu(this.menuList);

      return;
    } catch (error) {
      Console.print(error.message);

      return this.inputMenu();
    }
  }
  checkSameMenu(menuList) {
    const menuNameArray = menuList.map((menu) => {
      //[이름, 개수]로 분할된 값중에서 이름을 name 으로 저장하고 리턴
      const [name] = menu.split('-');
      return name;
    });

    Validator.menuName(menuNameArray);
  }

  checkMenu(menuList) {}
}
export default Customer;
