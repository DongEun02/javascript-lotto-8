const PRIZE = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

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
