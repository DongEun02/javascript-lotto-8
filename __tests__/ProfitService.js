import ProfitService from '../src/service/ProfitService.js';

describe('ProfitService', () => {
  test('등수별 개수에 따른 총 상금이 정확히 계산된다.', () => {
    const result = {
      FIRST: 1,
      SECOND: 1,
      THIRD: 1,
      FOURTH: 1,
      FIFTH: 1,
      NONE: 0,
    };

    const totalProfit = ProfitService.calculateProfit(result);

    const expected = 2000000000 + 30000000 + 1500000 + 50000 + 5000;

    expect(totalProfit).toBe(expected);
  });

  test.each([
    [
      // 반올림 테스트
      { FIRST: 0, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 1, NONE: 0 },
      7900,
      '63.3',
    ],
    [
      { FIRST: 0, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 1, NONE: 0 },
      8100,
      '61.7',
    ],
    [
      { FIRST: 0, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 1, NONE: 0 },
      5000,
      '100.0',
    ],
  ])(
    '수익률이 소수점 둘째 자리에서 정확히 반올림된다.',
    (result, amount, expected) => {
      const rate = ProfitService.calculateRate(result, amount);
      expect(rate).toBe(expected);
    }
  );
});
