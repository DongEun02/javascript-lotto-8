import { ERROR_MESSAGE } from '../constants/message.js';

const InputValidator = {
  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount < 1000) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT_TYPE);
    }
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT_UNIT);
    }
  },

  validateWinningNumbers(input) {
    if (/[^0-9,\s]/.test(input)) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER_FORMAT);
    }
  },

  validateParsingNumbers(input) {
    const numbers = input.split(',').map(Number);
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER_COUNT);
    }
    if (numbers.some((n) => n < 1 || n > 45)) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_OUT_OF_RANGE);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_WINNING_NUMBER);
    }
  },

  validateBonusNumber(bonus, winningNumbers) {
    const numbers = winningNumbers.getNumbers();
    if (isNaN(bonus)) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER_TYPE);
    }
    if (bonus < 1 || bonus > 45) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_OUT_OF_RANGE);
    }
    if (numbers.includes(bonus)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATED_WITH_WINNING);
    }
  },
};

export default InputValidator;
