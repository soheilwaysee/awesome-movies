import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import HamburgerMenu from "../../components/HamburgerMenu";

afterEach(cleanup);

it("renders HamburgerMenu", async () => {
  const setShowSideBar = jest.fn(show => !show);
  const { container, findByTestId } = render(
    <HamburgerMenu setShowSideBar={setShowSideBar} />
  );
  const button = await findByTestId("button");
  fireEvent.click(button);
  expect(setShowSideBar).toHaveBeenCalledTimes(1);
  fireEvent.click(button);
  expect(setShowSideBar).toHaveBeenCalledTimes(2);
  expect(container.firstChild).toMatchSnapshot();
});
