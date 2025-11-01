const LottoResultService = {
  calculateRank(matchCount, hasBonus) {
    if (matchCount === 6) return 'FIRST';
    if (matchCount === 5 && hasBonus) return 'SECOND';
    if (matchCount === 5) return 'THIRD';
    if (matchCount === 4) return 'FOURTH';
    if (matchCount === 3) return 'FIFTH';
    return 'NONE';
  },
  compareLottos(userLottos, winningLotto, bonusNumber) {
    const winningNumbers = winningLotto.getNumbers();

    const result = userLottos.map((lotto) => {
      const matchCount = lotto.filter((num) =>
        winningNumbers.includes(num)
      ).length;
      const hasBonus = lotto.includes(bonusNumber);
      const rank = this.calculateRank(matchCount, hasBonus);
      return { lotto, rank };
    });
    return result;
  },
  countRanks(results) {
    const count = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
      NONE: 0,
    };
    results.forEach(({ rank }) => {
      count[rank] += 1;
    });
    return count;
  },
  getResult(userLottos, winningLotto, bonusNumber) {
    const results = this.compareLottos(userLottos, winningLotto, bonusNumber);
    const count = this.countRanks(results);
    return count;
  },
};

export default LottoResultService;
