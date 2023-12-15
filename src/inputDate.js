import { Console } from '@woowacourse/mission-utils';
import InputView from './views/InputView.js';
import Validator from './utils/Validator.js';

export const inputDate = async () => {
  try {
    const date = await InputView.date();
    checkDate();

    return date;
  } catch (error) {
    Console.print(error.message);

    return inputCarNames();
  }
};

const checkDate = () => {
  Va;
};
