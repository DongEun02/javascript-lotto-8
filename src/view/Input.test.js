import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';

describe('Input 모듈 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // 테스트 간 영향을 없애기
  });

  test('구입 금액을 숫자로 변환해 반환한다.', async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue('8000');

    const result = await Input.purchaseAmount();

    expect(result).toBe(8000);
  });
});
