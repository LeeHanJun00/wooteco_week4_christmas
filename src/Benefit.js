import { MENU, GIFT } from './constants/Constant.js';
class Benefit {
  constructor() {
    this.gift = 0;
  }
  validateGift(totalAmount) {
    if (totalAmount > 120000) {
      this.gift = MENU[GIFT];
      return GIFT;
    }
    return 'nothing';
  }
}
export default Benefit;
