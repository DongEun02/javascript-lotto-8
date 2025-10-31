import Input from './view/Input.js';
import LottoGeneratorService from './service/LottoGeneratorService.js';
import Output from './view/output.js';
import WinningNumberService from './service/WinningNumberService.js';

class App {
  async run() {
    const purchaseAmount = await Input.purchaseAmount();
    const lottos = LottoGeneratorService.generate(purchaseAmount);
    Output.printLottos(lottos);
    const winningNumbersString = await Input.winningNumbers();
    const winningNumbers = WinningNumberService.parse(winningNumbersString);
    const bonusNumber = await Input.bonusNumber();
  }
}

export default App;
