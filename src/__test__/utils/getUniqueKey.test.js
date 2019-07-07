import getUniqueKey from '../../utils/getUniqueKey';

test('getUniqueKey', () => {
  const mockArray = new Array(20).fill(null);
  mockArray.forEach((_, index) => expect(getUniqueKey()).toBe(index));
});
