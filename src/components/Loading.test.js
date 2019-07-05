import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import Loading from "./Loading";

afterEach(cleanup);

it("renders Loading", async () => {
  const { container, rerender } = render(<Loading />);
  expect(container.firstChild).toBeNull();
  rerender(<Loading show />);
  expect(container.firstChild).not.toBeNull();
  expect(container.firstChild).toMatchSnapshot();
});
