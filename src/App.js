import OutputView from './views/OutputView.js';
import Customer from './Customer.js';
import Benefit from './Benefit.js';
class App {
  async run() {
    OutputView.printStart();

    const customer = new Customer();
    await customer.inputDate();
    await customer.inputMenu();
    await customer.totalPrice();

    OutputView.printDate(customer.visitDate);
    OutputView.printMenu(customer.menuList);
    OutputView.totalPrice(customer.totalAmount);

    const benefit = new Benefit();

    const gift = benefit.validateGift(customer.totalAmount);
    OutputView.gift(gift);
    this.validateBenefit(benefit, customer);
    console.log(benefit);
  }

  validateBenefit(benefit, customer) {
    const result = benefit.checkBenefitQualification(customer.totalAmount);
    if (result === '혜택적용') {
      benefit.checkBenefits(customer.totalAmount, customer.visitDate, customer.menuList);
    }
    if (result === '혜택미적용') {
      return;
    }
  }
}

export default App;
