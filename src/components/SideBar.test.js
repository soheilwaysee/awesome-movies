import React from "react";
import {
  render,
  //   fireEvent,
  cleanup
  //   waitForElement
} from "@testing-library/react";
import "jest-dom/extend-expect";
import SideBar from "./SideBar";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

it("renders personalized greeting", async () => {
  afterEach(cleanup);
  const SideBarWithRouter = () => (
    <MemoryRouter initialEntries={["/movie/favorites"]} initialIndex={0}>
      <SideBar />
    </MemoryRouter>
  );
  // Render new instance in every test to prevent leaking state
  const { findAllByTestId, findByText, container } = render(
    <SideBarWithRouter
      showSideBar
      setShowSideBar={() => console.log("show sideBar is called")}
    />
  );

  const links = await findAllByTestId("link");
  expect(links).toHaveLength(6);
  const favorite = await findByText("Favorites");
  expect(favorite).toHaveClass("link active");
  expect(container.firstChild).toMatchSnapshot();
});
