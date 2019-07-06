import getQuery from "../../utils/getQuery";

test("getQuery", () => {
  const query = "?username=Soheil";
  expect(getQuery()).toBeUndefined();
  expect(getQuery(query)).toBeUndefined();
  expect(getQuery(query, "username")).toEqual("Soheil");
});
