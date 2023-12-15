import { ERROR, MENU } from '../constants/Constant.js';

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

  static menuNumber(numberList) {
    numberList.forEach((number) => {
      if (!/^[1-9]\d*$/.test(Number(number))) {
        throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
      }
    });

    return;
  }
}

export default Validator;
