import { Random } from '@woowacourse/mission-utils';

const LottoGeneratorService = {
  generate(purchaseAmount) {
    const count = purchaseAmount / 1000;
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      lottos.push(numbers);
    }
    return lottos;
  },
};

export default LottoGeneratorService;
