import * as React from "react";
import { Control, ControlProps } from "../component";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";

it("component renders", () => {
  const videoList = [1, 2, 3].map(item => ({
    playbackRate: item,
    paused: false,
    muted: false
  }));
  const onSetRate: jest.Mock<
    Promise<void>,
    [number, number]
  > = jest.fn((idx: number, value: number) => Promise.resolve());
  const onPlay: jest.Mock<Promise<void>, [number]> = jest.fn((idx: number) =>
    Promise.resolve()
  );
  const onPause: jest.Mock<Promise<void>, [number]> = jest.fn((idx: number) =>
    Promise.resolve()
  );
  const props: ControlProps = {
    videoList,
    onSetRate,
    onPlay,
    onPause
  };

  const tree:
    | ReactTestRendererJSON
    | ReactTestRendererJSON[]
    | null = renderer.create(<Control {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
