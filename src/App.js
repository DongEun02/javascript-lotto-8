import Input from './view/Input.js';
import LottoGeneratorService from './service/LottoGeneratorService.js';
import Output from './view/output.js';
import WinningNumberService from './service/WinningNumberService.js';
import LottoResultService from './service/LottoResultService.js';
import ProfitService from './service/ProfitService.js';

class App {
  async run() {
    const purchaseAmount = await Input.purchaseAmount();
    const lottos = LottoGeneratorService.generate(purchaseAmount);
    Output.printLottos(lottos);
    const winningNumbersString = await Input.winningNumbers();
    const winningNumbers =
      WinningNumberService.createWinningLotto(winningNumbersString);
    const bonusNumber = await Input.bonusNumber();
    const result = LottoResultService.getResult(
      lottos,
      winningNumbers,
      bonusNumber
    );
    const profit = ProfitService.calculateRate(result, purchaseAmount);
  }
}

export default App;
