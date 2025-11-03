import { Random } from '@woowacourse/mission-utils';
import { LOTTO_CONFIG } from '../constants/config.js';

const LottoGeneratorService = {
  generate(purchaseAmount) {
    const count = purchaseAmount / LOTTO_CONFIG.PRICE;
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_CONFIG.NUMBER_RANGE.MIN,
        LOTTO_CONFIG.NUMBER_RANGE.MAX,
        LOTTO_CONFIG.COUNT
      ).sort((a, b) => a - b);
      lottos.push(numbers);
    }
    return lottos;
  },
};

export default LottoGeneratorService;
