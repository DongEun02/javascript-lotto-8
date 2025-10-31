import WinningNumberService from './WinningNumberService';

describe('WinningNumberService', () => {
  test('쉼표로 구분된 문자열을 숫자 배열로 변환한다.', () => {
    const result = WinningNumberService.parse('1,2,3,4,5,6');
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('공백이 포함된 문자열도 올바르게 변환한다.', () => {
    const result = WinningNumberService.parse(' 1, 2 ,3,4 , 5,6 ');
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
