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
  }
}

export default App;
