import { Console } from '@woowacourse/mission-utils';
const OutputView = {
  printStart() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');

    // ...
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
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${toalAmount.toLocaleString()}원`);
  },
  // ...
};

export default OutputView;
