import { Random } from '@woowacourse/mission-utils';
import LottoGeneratorService from './LottoGeneratorService.js';

describe('LottoGeneratorService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // 랜덤 함수는 항상 같은 결과를 반환하도록 mock
    Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockReturnValue([1, 2, 3, 4, 5, 6]);
  });

  // test.each로 여러 구입금액 케이스를 한번에 테스트
  test.each([
    [1000, 1],
    [5000, 5],
    [8000, 8],
  ])(
    '구입금액 n*1000원일 때 n개의 로또가 생성된다.',
    (amount, expectedCount) => {
      const lottos = LottoGeneratorService.generate(amount);

      expect(lottos).toHaveLength(expectedCount);
      expect(Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(
        expectedCount
      );
    }
  );
});
