import { PRIZE } from '../constants/prize.js';

const ProfitService = {
  calculateProfit(result) {
    return (
      result.FIRST * PRIZE.FIRST +
      result.SECOND * PRIZE.SECOND +
      result.THIRD * PRIZE.THIRD +
      result.FOURTH * PRIZE.FOURTH +
      result.FIFTH * PRIZE.FIFTH
    );
  },
  calculateRate(result, purchaseAmount) {
    const totalProfit = this.calculateProfit(result);
    return ((totalProfit / purchaseAmount) * 100).toFixed(1);
  },
};

export default ProfitService;
