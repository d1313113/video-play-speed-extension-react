import * as React from "react";
import { Header } from "../component";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";

it("component renders", () => {
  const tree:
    | ReactTestRendererJSON
    | ReactTestRendererJSON[]
    | null = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
