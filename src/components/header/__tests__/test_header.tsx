import * as React from "react";
import { Header } from "../component";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";

it("component renders", () => {
  const props = {
    onReload: jest.fn()
  };
  const tree:
    | ReactTestRendererJSON
    | ReactTestRendererJSON[]
    | null = renderer.create(<Header {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
