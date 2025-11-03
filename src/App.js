import Input from './view/Input.js';
import LottoGeneratorService from './service/LottoGeneratorService.js';
import Output from './view/output.js';
import WinningNumberService from './service/WinningNumberService.js';
import LottoResultService from './service/LottoResultService.js';
import ProfitService from './service/ProfitService.js';
import InputValidator from './validator/InputValidator.js';

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottos = this.createLottos(purchaseAmount);

    const { winningNumbers, bonusNumber } = await this.getWinningInfo();
    const result = this.calculateResult(lottos, winningNumbers, bonusNumber);

    this.printSummary(result, purchaseAmount);
  }

  async getPurchaseAmount() {
    const amount = await Input.purchaseAmount();
    InputValidator.validatePurchaseAmount(amount);
    return amount;
  }

  createLottos(amount) {
    const lottos = LottoGeneratorService.generate(amount);
    Output.printLottos(lottos);
    return lottos;
  }

  async getWinningInfo() {
    const winningNumbersString = await Input.winningNumbers();
    InputValidator.validateWinningNumbers(winningNumbersString);
    InputValidator.validateParsingNumbers(winningNumbersString);

    const winningNumbers =
      WinningNumberService.createWinningLotto(winningNumbersString);

    const bonusNumber = await Input.bonusNumber();
    InputValidator.validateBonusNumber(bonusNumber, winningNumbersString);

    return { winningNumbers, bonusNumber };
  }

  calculateResult(lottos, winningNumbers, bonusNumber) {
    return LottoResultService.getResult(lottos, winningNumbers, bonusNumber);
  }

  printSummary(result, purchaseAmount) {
    const profit = ProfitService.calculateRate(result, purchaseAmount);
    Output.printResult(result, profit);
  }
}

export default App;
