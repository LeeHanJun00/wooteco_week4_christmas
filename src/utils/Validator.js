import { ERROR, MENU, DRINK, DESSERT, MAIN, SPECIAL_DATE } from '../constants/Constant.js';

class Validator {
  static dateRange(userInputDate) {
    if (!/^(?:[1-9]|1\d|2[0-9]|3[0-1])$/.test(userInputDate)) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }

    return;
  }

  static menuName(menuNameList) {
    menuNameList.forEach((name) => {
      if (!Object.keys(MENU).includes(name)) {
        throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
      }
    });

    return;
  }

  static orderOnlyDrink(menuNameList) {
    const DRINK_NAMES = Object.keys(DRINK);
    if (menuNameList.length === menuNameList.filter((name) => DRINK_NAMES.includes(name)).length) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }

    return;
  }

  static sameMenuName(menuNameList) {
    const setMenuNameList = new Set(menuNameList);
    if (menuNameList.length !== setMenuNameList.size) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  }

  static menuNumber(numberList) {
    numberList.forEach((number) => {
      if (!/^[1-9]\d*$/.test(Number(number))) {
        throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
      }
    });

    return;
  }

  static maximumOrder(numberList) {
    const totalOrder = numberList.reduce((acc, curr) => acc + Number(curr), 0);
    if (totalOrder > 20) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  }

  static weekdayOrWeekend(visitDate) {
    const date = new Date(2023, 11, visitDate);
    if (date.getDay() >= 0 && date.getDay() <= 4) {
      return '평일';
    }

    return '주말';
  }
  static countDessert(menuList) {
    let count = 0;
    Object.keys(menuList).forEach((name) => {
      if (Object.keys(DESSERT).includes(name)) {
        count += menuList[name];
      }
    });

    return count;
  }
  static countMain(menuList) {
    let count = 0;
    Object.keys(menuList).forEach((name) => {
      if (Object.keys(MAIN).includes(name)) {
        count += menuList[name];
      }
    });

    return count;
  }

  static specialDate(visitDate) {
    if (SPECIAL_DATE.includes(visitDate)) {
      return '특별할인';
    }
    return;
  }
}

export default Validator;
