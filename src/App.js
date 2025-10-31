import Input from './view/Input.js';
import LottoGeneratorService from './service/LottoGeneratorService.js';

class App {
  async run() {
    const purchaseAmount = await Input.purchaseAmount();
    const lottos = LottoGeneratorService.generate(purchaseAmount);
  }
}

export default App;
