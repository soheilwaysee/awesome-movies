import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import "jest-dom/extend-expect";

afterEach(cleanup);

const HelloMessage = ({ name }) => <div>hello {name}</div>;
it("renders personalized greeting", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = render(<HelloMessage name="Satoshi" />);
  await waitForElement(() => getByText(/hello Satoshi/i));
});
it("renders personalized greeting", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = render(<HelloMessage name="Satoshi" />);

  await waitForElement(() => getByText(/hello Satoshi/i));
});
