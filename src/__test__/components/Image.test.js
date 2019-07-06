import React from "react";
import {
  render,
  cleanup,
} from "@testing-library/react";
import "jest-dom/extend-expect";
import Image from "../../components/Image";

afterEach(cleanup);

it("renders personalized greeting", async () => {
  // Render new instance in every test to prevent leaking state

    const { getByTestId, unmount, container } = render(<Image />);
    const imageNode = getByTestId("image");
    expect(imageNode).toBeInTheDocument();
    unmount();
    expect(imageNode).not.toBeInTheDocument();
    expect(imageNode).toMatchSnapshot();
    cleanup();
    expect(document.body.innerHTML).toBe("");
});

