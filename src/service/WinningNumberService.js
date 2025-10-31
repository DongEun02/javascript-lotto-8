import Lotto from '../domain/Lotto.js';

const WinningNumberService = {
  parse(input) {
    return input.split(',').map(Number);
  },
  createWinningLotto(input) {
    const numbers = this.parse(input);
    return new Lotto(numbers);
  },
};

export default WinningNumberService;
