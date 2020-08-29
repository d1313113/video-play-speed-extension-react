import * as React from "react";
import { ScrollTips } from "../component";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";

it("component renders", () => {
  const tree:
    | ReactTestRendererJSON
    | ReactTestRendererJSON[]
    | null = renderer.create(<ScrollTips />).toJSON();
  expect(tree).toMatchSnapshot();
});
