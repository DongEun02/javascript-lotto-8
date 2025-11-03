import { Console } from '@woowacourse/mission-utils';
import { PRIZE } from '../constants/prize.js';

const Output = {
  printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(lotto));
    Console.print('');
  },
  printResult(result, profitRate) {
    Console.print('\n당첨통계\n---');
    Console.print(
      `3개 일치 (${PRIZE.FIFTH.toLocaleString()}원) - ${result.FIFTH}개`
    );
    Console.print(
      `4개 일치 (${PRIZE.FOURTH.toLocaleString()}원) - ${result.FOURTH}개`
    );
    Console.print(
      `5개 일치 (${PRIZE.THIRD.toLocaleString()}원) - ${result.THIRD}개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${PRIZE.SECOND.toLocaleString()}원) - ${
        result.SECOND
      }개`
    );
    Console.print(
      `6개 일치 (${PRIZE.FIRST.toLocaleString()}원) - ${result.FIRST}개`
    );
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },
  printError(message) {
    Console.print(message);
  },
};

export default Output;
