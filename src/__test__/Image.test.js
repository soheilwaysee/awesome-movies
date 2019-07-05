import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import "jest-dom/extend-expect";
import Image from "../components/Image";
import { Switch, Route, MemoryRouter } from "react-router-dom";

const App = () => (
  <MemoryRouter initialEntries={["/one"]} initialIndex={0}>
    <Switch>
      <Route
        path="/one"
        component={() => <div data-testid="one">one is matched</div>}
      />
      <Route
        path="/two"
        component={() => <div data-testid="two">two is matched</div>}
      />
    </Switch>
  </MemoryRouter>
);

afterEach(cleanup);

it("renders personalized greeting", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByTestId } = render(<App />);
  expect(getByTestId("one")).toBeInTheDocument();

  //   const { getByTestId, unmount, container } = render(<Image />);
  //   const imageNode = getByTestId("image");
  //   expect(imageNode).toBeInTheDocument();
  //   unmount();
  //   expect(imageNode).not.toBeInTheDocument();
  //   expect(imageNode).toMatchSnapshot();
  //   cleanup();
  //   expect(document.body.innerHTML).toBe("");
});
// it("renders personalized greeting", async () => {
//   // Render new instance in every test to prevent leaking state
//   const { getByText } = render(<Image name="Satoshi" />);

//   await waitForElement(() => getByText(/hello Satoshi/i));
// });
