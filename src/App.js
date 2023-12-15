import OutputView from './views/OutputView.js';
import Customer from './Customer.js';
class App {
  async run() {
    OutputView.printStart();

    const customer = new Customer();
    // await customer.inputDate();
    await customer.inputMenu();

    // console.log(customer);
  }
}

export default App;
