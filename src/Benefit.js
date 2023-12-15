import { AMOUNT, MENU, GIFT } from './constants/Constant.js';
import Validator from './utils/Validator.js';
class Benefit {
  constructor() {
    this.totalDiscountAmount = 0;
    this.gift = 0;
    this.weekdayDiscountAmount = 0;
    this.weekendDiscountAmount = 0;
    this.specialDiscountAmount = 0;
    this.christmasDiscountAmount = 0;
    this.eventBege;
  }
  checkBenefits(totalAmount, visitDate, menuList) {
    this.checkChristmasDiscount(visitDate);
    this.checkWeekdayOrWeekend(visitDate, menuList);
    this.checkspecialDiscountAmount(visitDate);
    this.calculateTotalDiscountAmount();
    this.checkBedge();
  }

  checkBedge() {
    const result = Validator.bedge(this.totalDiscountAmount);
    this.eventBege = result;
  }

  calculateTotalDiscountAmount() {
    this.totalDiscountAmount =
      this.gift +
      this.weekdayDiscountAmount +
      this.weekendDiscountAmount +
      this.specialDiscountAmount +
      this.christmasDiscountAmount;
  }

  checkspecialDiscountAmount(visitDate) {
    const result = Validator.specialDate(visitDate);
    if (result === '특별할인') {
      this.specialDiscountAmount += 1000;
    }

    return;
  }

  checkWeekdayOrWeekend(visitDate, menuList) {
    const result = Validator.weekdayOrWeekend(visitDate);

    if (result === '평일') {
      this.weekendDiscountAmount = 0;
      this.calculateWeekdayDiscountAmount(menuList);
      return;
    }

    if (result === '주말') {
      this.weekdayDiscountAmount = 0;
      this.calculateWeekendDiscountAmount(menuList);
      return;
    }
  }

  calculateWeekdayDiscountAmount(menuList) {
    const numberOfDessert = Validator.countDessert(menuList);
    this.weekdayDiscountAmount = numberOfDessert * AMOUNT.discountOnWeekendAndWeekday;
  }

  calculateWeekendDiscountAmount(menuList) {
    const numberOfMain = Validator.countMain(menuList);
    this.weekendDiscountAmount = numberOfMain * AMOUNT.discountOnWeekendAndWeekday;
  }

  validateGift(totalAmount) {
    if (totalAmount > 120000) {
      this.gift = MENU[GIFT];
      return GIFT;
    }
    return 'nothing';
  }

  checkBenefitQualification(totalAmount, visitDate, menuList) {
    if (totalAmount < 10000) {
      return '혜택미적용';
    }
    if (totalAmount >= 10000) {
      return '혜택적용';
    }
  }

  checkChristmasDiscount(visitDate) {
    if (visitDate > 25) {
      return 0;
    }
    if (visitDate >= 1 && visitDate <= 25) {
      const amount = this.christmasDiscount(visitDate);

      return amount;
    }
  }

  christmasDiscount(visitDate) {
    const discountAmount = (visitDate - 1) * AMOUNT.christmasDiscountIncrease + AMOUNT.christmasDiscountStart;
    this.christmasDiscountAmount = discountAmount;

    return;
  }

  calculateAfterDiscount(totalAmount) {
    if (this.gift !== 0) {
      const result = totalAmount - (this.totalDiscountAmount + AMOUNT.minimumAmountOfGiftEvent);

      return result;
    }

    if (this.gift === 0) {
      const result = totalAmount - this.totalDiscountAmount;

      return result;
    }
  }
}

export default Benefit;
