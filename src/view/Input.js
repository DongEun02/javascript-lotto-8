import { Console } from '@woowacourse/mission-utils';

const Input = {
  async purchaseAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return Number(input);
  },
  async winningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return input;
  },
};

export default Input;
