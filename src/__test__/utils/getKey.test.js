import getKey from "../../utils/getKey";

test("get key", () => {
  const mockArray = new Array(20).fill(null);
  mockArray.forEach((_, index) => expect(getKey()).toBe(index));
});
