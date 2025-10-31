import Input from './view/Input.js';

class App {
  async run() {
    const purchaseAmount = await Input.purchaseAmount();
  }
}

export default App;
