import OutputView from './views/OutputView.js';
import Customer from './Customer.js';
class App {
  async run() {
    OutputView.printStart();

    const customer = new Customer();
    await customer.inputDate();
    await customer.inputMenu();
    await customer.totalPrice();

    OutputView.printDate(customer.visitDate);
    OutputView.printMenu(customer.menuList);
  }
}

export default App;
