import { formatTwoDecimal } from '../strings';

describe('formatTwoDecimal', () => {
  test('Return value', () => {
    const number = 1234.7777;
    const expected = '1234.78';
    const value = formatTwoDecimal(number);
    expect(value).toStrictEqual(expected);
  });
});
