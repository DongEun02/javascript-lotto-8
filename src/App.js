import Input from './view/Input.js';
import LottoGeneratorService from './service/LottoGeneratorService.js';
import Output from './view/output.js';

class App {
  async run() {
    const purchaseAmount = await Input.purchaseAmount();
    const lottos = LottoGeneratorService.generate(purchaseAmount);
    Output.printLottos(lottos);
    const winningNumbers = await Input.winningNumbers();
  }
}

export default App;
