import * as React from "react";
import { Control } from "../component";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";

it("component renders", () => {
  const onSetRate: jest.Mock<
    Promise<void>,
    [number, number]
  > = jest.fn((idx: number, value: number) => Promise.resolve());
  const props = {
    videoList: [1, 2, 3],
    onSetRate
  };

  const tree:
    | ReactTestRendererJSON
    | ReactTestRendererJSON[]
    | null = renderer.create(<Control {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
