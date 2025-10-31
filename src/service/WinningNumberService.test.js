import WinningNumberService from './WinningNumberService';
import Lotto from '../domain/Lotto.js';

describe('WinningNumberService', () => {
  test('쉼표로 구분된 문자열을 숫자 배열로 변환한다.', () => {
    const result = WinningNumberService.parse('1,2,3,4,5,6');
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('공백이 포함된 문자열도 올바르게 변환한다.', () => {
    const result = WinningNumberService.parse(' 1, 2 ,3,4 , 5,6 ');
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('입력 문자열로 Lotto 객체를 생성한다.', () => {
    const lotto = WinningNumberService.createWinningLotto('1,2,3,4,5,6');

    expect(lotto).toBeInstanceOf(Lotto);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
