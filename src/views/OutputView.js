import { Console } from '@woowacourse/mission-utils';
import { GIFT } from '../constants/Constant.js';
const OutputView = {
  printStart() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printDate(visitDate) {
    Console.print(`12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
  },

  printMenu(menuList) {
    Console.print('<주문 메뉴>');
    Object.keys(menuList).forEach((menu) => {
      Console.print(`${menu} ${menuList[menu]}개`);
    });
  },

  totalPrice(toalAmount) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${toalAmount.toLocaleString()}원`);
  },

  gift(gift) {
    Console.print('\n<증정 메뉴>');
    if (gift === GIFT) {
      Console.print(`${gift} 1개`);
    }

    if (gift !== GIFT) {
      Console.print(`없음`);
    }
  },

  benefitList(benefit) {
    Console.print('\n<혜택 내역>');
    if (benefit.christmasDiscountAmount > 0)
      Console.print(`크리스마스 디데이 할인: -${benefit.christmasDiscountAmount.toLocaleString()}원`);
    if (benefit.gift > 0) Console.print(`증정 이벤트: -${benefit.gift.toLocaleString()}원`);
    if (benefit.weekdayDiscountAmount > 0)
      Console.print(`평일 할인: -${benefit.weekdayDiscountAmount.toLocaleString()}원`);
    if (benefit.weekendDiscountAmount > 0)
      Console.print(`주말 할인: -${benefit.weekendDiscountAmount.toLocaleString()}원`);
    if (benefit.specialDiscountAmount > 0)
      Console.print(`특별 할인: -${benefit.specialDiscountAmount.toLocaleString()}원`);
    if (Object.values(benefit).every((value) => value === 0)) {
      Console.print('없음');
    }
  },

  printTotalBenefitAmount(amount) {
    Console.print('\n<총혜택 금액>');
    if (amount === 0) {
      Console.print(`0원`);
    }

    if (amount > 0) {
      Console.print(`-${amount.toLocaleString()}원`);
    }
  },

  printAfterDiscount(afterDiscountPrice) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${afterDiscountPrice.toLocaleString()}원`);
  },

  printEventBedge(bedgeName) {
    Console.print('\n<12월 이벤트 배지>');
    Console.print(`${bedgeName}`);
  },
};

export default OutputView;
