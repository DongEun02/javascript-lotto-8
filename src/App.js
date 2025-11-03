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

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    const result = this.calculateResult(lottos, winningNumbers, bonusNumber);

    this.printSummary(result, purchaseAmount);
  }

  async getPurchaseAmount() {
    try {
      const amount = await Input.purchaseAmount();
      InputValidator.validatePurchaseAmount(amount);
      return amount;
    } catch (error) {
      Output.printError(error.message);
      return this.getPurchaseAmount();
    }
  }

  createLottos(amount) {
    const lottos = LottoGeneratorService.generate(amount);
    Output.printLottos(lottos);
    return lottos;
  }

  async getWinningNumbers() {
    try {
      const winningNumbersString = await Input.winningNumbers();
      InputValidator.validateWinningNumbers(winningNumbersString);
      InputValidator.validateParsingNumbers(winningNumbersString);

      const winningNumbers =
        WinningNumberService.createWinningLotto(winningNumbersString);
      return winningNumbers;
    } catch (error) {
      Output.printError(error.message);
      return this.getWinningNumbers();
    }
  }

  async getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await Input.bonusNumber();
      InputValidator.validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (error) {
      Output.printError(error.message);
      return this.getBonusNumber(winningNumbers);
    }
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
