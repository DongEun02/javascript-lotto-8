import InputValidator from './InputValidator.js';
import { ERROR_MESSAGE } from '../constants/message.js';

describe('InputValidator', () => {
  describe('validatePurchaseAmount', () => {
    test.each([
      ['문자열 입력', 'abc', ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT_TYPE],
      ['1000 미만 금액', 500, ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT_TYPE],
      [
        '1000 단위가 아닌 금액',
        1500,
        ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT_UNIT,
      ],
    ])('%s', (_, input, expectedError) => {
      expect(() => InputValidator.validatePurchaseAmount(input)).toThrow(
        expectedError
      );
    });

    test('정상 입력 시 에러 발생하지 않음', () => {
      expect(() => InputValidator.validatePurchaseAmount(3000)).not.toThrow();
    });
  });

  describe('validateWinningNumbers', () => {
    test('숫자와 쉼표 외의 문자가 포함된 경우 예외 발생', () => {
      expect(() =>
        InputValidator.validateWinningNumbers('1,2,a,4,5,6')
      ).toThrow(ERROR_MESSAGE.INVALID_WINNING_NUMBER_FORMAT);
    });

    test('정상 입력 시 에러 발생하지 않음', () => {
      expect(() =>
        InputValidator.validateWinningNumbers('1,2,3,4,5,6')
      ).not.toThrow();
    });
  });

  describe('validateParsingNumbers', () => {
    test.each([
      [
        '6개 미만 번호',
        '1,2,3,4,5',
        ERROR_MESSAGE.INVALID_WINNING_NUMBER_COUNT,
      ],
      [
        '6개 초과 번호',
        '1,2,3,4,5,6,7',
        ERROR_MESSAGE.INVALID_WINNING_NUMBER_COUNT,
      ],
      [
        '범위 초과 번호',
        '0,2,3,4,5,46',
        ERROR_MESSAGE.WINNING_NUMBER_OUT_OF_RANGE,
      ],
      ['중복된 번호', '1,2,2,4,5,6', ERROR_MESSAGE.DUPLICATE_WINNING_NUMBER],
    ])('%s', (_, input, expectedError) => {
      expect(() => InputValidator.validateParsingNumbers(input)).toThrow(
        expectedError
      );
    });

    test('정상 입력 시 에러 발생하지 않음', () => {
      expect(() =>
        InputValidator.validateParsingNumbers('1,2,3,4,5,6')
      ).not.toThrow();
    });
  });

  describe('validateBonusNumber', () => {
    test.each([
      ['a', ERROR_MESSAGE.INVALID_BONUS_NUMBER_TYPE],
      [0, ERROR_MESSAGE.BONUS_NUMBER_OUT_OF_RANGE],
      [46, ERROR_MESSAGE.BONUS_NUMBER_OUT_OF_RANGE],
      [3, ERROR_MESSAGE.BONUS_NUMBER_DUPLICATED_WITH_WINNING],
    ])('보너스번호 입력 오류 시 에러가 발생한다.', (bonus, expectedError) => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() =>
        InputValidator.validateBonusNumber(bonus, winningNumbers)
      ).toThrow(expectedError);
    });

    test('정상 입력 시 에러 발생하지 않음', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() =>
        InputValidator.validateBonusNumber(7, winningNumbers)
      ).not.toThrow();
    });
  });
});
