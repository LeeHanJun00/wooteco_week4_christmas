import { ERROR } from '../constants/Constant.js';

class Validator {
  static dateRange(userInputDate) {
    if (!/^(?:[1-9]|1\d|2[0-9]|3[0-1])$/.test(userInputDate)) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }

    return;
  }
}

export default Validator;
