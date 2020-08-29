import * as React from "react";
import { EmptyCard } from "../component";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";

it("component renders", () => {
  const tree:
    | ReactTestRendererJSON
    | ReactTestRendererJSON[]
    | null = renderer.create(<EmptyCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
