import LottoResultService from '../src/service/LottoResultService.js';

describe('LottoResultService', () => {
  const winningLotto = {
    getNumbers: () => [1, 2, 3, 4, 5, 6],
  };
  const bonusNumber = 7;

  test.each([
    [[1, 2, 3, 4, 5, 6], 'FIRST'],
    [[1, 2, 3, 4, 5, 7], 'SECOND'],
    [[1, 2, 3, 4, 5, 10], 'THIRD'],
    [[1, 2, 3, 4, 10, 11], 'FOURTH'],
    [[1, 2, 3, 9, 10, 11], 'FIFTH'],
    [[1, 2, 9, 10, 11, 12], 'NONE'],
  ])(
    '당첨 번호와 비교하여 올바른 결과가 도출된다.',
    (lottoNumbers, expectedRank) => {
      const userLottos = [lottoNumbers];
      const result = LottoResultService.getResult(
        userLottos,
        winningLotto,
        bonusNumber
      );

      // count 객체 중 해당 등수만 1인지 검증
      expect(result[expectedRank]).toBe(1);
    }
  );

  test('여러 로또 결과가 합산되어 올바른 count를 반환한다.', () => {
    const userLottos = [
      [1, 2, 3, 4, 5, 6], // FIRST
      [1, 2, 3, 4, 5, 7], // SECOND
      [1, 2, 3, 4, 5, 10], // THIRD
      [1, 2, 3, 4, 10, 11], // FOURTH
      [1, 2, 3, 9, 10, 11], // FIFTH
      [1, 2, 9, 10, 11, 12], // NONE
    ];

    const result = LottoResultService.getResult(
      userLottos,
      winningLotto,
      bonusNumber
    );

    expect(result).toEqual({
      FIRST: 1,
      SECOND: 1,
      THIRD: 1,
      FOURTH: 1,
      FIFTH: 1,
      NONE: 1,
    });
  });
});
