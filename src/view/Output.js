import { Console } from '@woowacourse/mission-utils';

const PRIZE = {
  FIRST: '2,000,000,000',
  SECOND: '30,000,000',
  THIRD: '1,500,000',
  FOURTH: '50,000',
  FIFTH: '5,000',
};

const Output = {
  printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(lotto));
    Console.print('');
  },
  printResult(result, profitRate) {
    Console.print('\n당첨통계\n---');
    Console.print(`3개 일치 (${PRIZE.FIFTH}원) - ${result.FIFTH}개`);
    Console.print(`4개 일치 (${PRIZE.FOURTH}원) - ${result.FOURTH}개`);
    Console.print(`5개 일치 (${PRIZE.THIRD}원) - ${result.THIRD}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (${PRIZE.SECOND}원) - ${result.SECOND}개`
    );
    Console.print(`6개 일치 (${PRIZE.FIRST}원) - ${result.FIRST}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },
  printError(message) {
    Console.print(message);
  },
};

export default Output;
