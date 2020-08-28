import * as React from "react";
import { Popup } from "../component";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";

it("component renders", () => {
  const tree:
    | ReactTestRendererJSON
    | ReactTestRendererJSON[]
    | null = renderer.create(<Popup />).toJSON();
  expect(tree).toMatchSnapshot();
});
