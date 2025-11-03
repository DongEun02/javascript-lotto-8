import { Console } from '@woowacourse/mission-utils';
import Input from '../src/view/Input.js';

describe('Input 모듈 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // 테스트 간 영향을 없애기
  });

  test('구입 금액을 숫자로 변환해 반환한다.', async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue('8000');

    const result = await Input.purchaseAmount();

    expect(result).toBe(8000);
  });

  test('당첨 번호를 입력받아 반환한다.', async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue('1,2,3,4,5,6');

    const result = await Input.winningNumbers();

    expect(result).toBe('1,2,3,4,5,6');
  });

  test('보너스 번호를 입력받아 반환한다.', async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue('30');

    const result = await Input.bonusNumber();

    expect(result).toBe(30);
  });
});
