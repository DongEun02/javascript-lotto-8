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
    expect(Console.print).toHaveBeenCalledTimes(1 + lottos.length);
    expect(Console.print).toHaveBeenNthCalledWith(1, '2개를 구매했습니다.');
    expect(Console.print).toHaveBeenNthCalledWith(2, lottos[0]);
    expect(Console.print).toHaveBeenNthCalledWith(3, lottos[1]);
  });
});
