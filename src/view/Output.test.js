import { Console } from '@woowacourse/mission-utils';
import Output from './output';

describe('Output 모듈 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    Console.print = jest.fn();
  });

  test('구매한 로또 개수와 각 로또를 출력한다.', () => {
    // given
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];

    // when
    Output.printLottos(lottos);

    // then
    expect(Console.print).toHaveBeenCalledTimes(1 + lottos.length + 1);
    expect(Console.print).toHaveBeenNthCalledWith(1, '\n2개를 구매했습니다.');
    expect(Console.print).toHaveBeenNthCalledWith(2, lottos[0]);
    expect(Console.print).toHaveBeenNthCalledWith(3, lottos[1]);
  });

  test('출력 순서와 내용이 올바르다', () => {
    const result = {
      FIRST: 1,
      SECOND: 2,
      THIRD: 3,
      FOURTH: 4,
      FIFTH: 5,
      NONE: 0,
    };
    const profitRate = '62.5';

    Output.printResult(result, profitRate);

    const expectedCalls = [
      '\n당첨통계\n---',
      `3개 일치 (5,000원) - 5개`,
      `4개 일치 (50,000원) - 4개`,
      `5개 일치 (1,500,000원) - 3개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - 2개`,
      `6개 일치 (2,000,000,000원) - 1개`,
      `총 수익률은 62.5%입니다.`,
    ];

    expect(Console.print).toHaveBeenCalledTimes(expectedCalls.length);

    expectedCalls.forEach((text, index) => {
      expect(Console.print).toHaveBeenNthCalledWith(index + 1, text);
    });
  });
});
