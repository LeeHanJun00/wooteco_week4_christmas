import OutputView from './views/OutputView.js';
import { inputDate } from './inputDate.js';
class App {
  async run() {
    OutputView.printStart();
    const date = await inputDate();
    // console.log(date);
  }
}

export default App;
