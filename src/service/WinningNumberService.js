const WinningNumberService = {
  parse(winningNumbers) {
    return winningNumbers.split(',').map(Number);
  },
};

export default WinningNumberService;
