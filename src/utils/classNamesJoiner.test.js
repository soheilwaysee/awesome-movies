import classNamesJoiner from "./classNamesJoiner";

test("classNamesJoiner", () => {
  const argument = ["wrapper", "inline"];
  const resultValue = "wrapper inline";
  expect(classNamesJoiner(argument)).toBe(resultValue);
});
