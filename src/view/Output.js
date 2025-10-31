import { Console } from '@woowacourse/mission-utils';

const Output = {
  printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(lotto));
    Console.print('');
  },
};

export default Output;
