import React, { FC } from "react";
import { Slider, Button } from "antd";
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  AudioMutedOutlined,
  AudioOutlined
} from "@ant-design/icons";
import { VideoStatus } from "@/content-script/actions/videosPlaybackRate";
import "./styles.scss";

const RATES = [1, 2, 3, 4, 5];

export interface ControlProps {
  videoList: VideoStatus[];
  onSetRate: (idx: number, value: number) => Promise<void>;
  onPlay: (idx: number) => Promise<void>;
  onPause: (idx: number) => Promise<void>;
  onMuted: (idx: number, muted: boolean) => Promise<void>;
}

export const Control: FC<ControlProps> = (props: ControlProps) => {
  const handleSetVideoRate = (index: number, value: number): void => {
    props.onSetRate(index, value);
  };

  const handleClickRate = (index: number, rate: number): void => {
    props.onSetRate(index, rate);
  };

  const { videoList } = props;

  return (
    <main className="control">
      <div className="title">可拖动step调整速度</div>
      <section className="control-main">
        {videoList.map((item, index) => (
          <div className="video-item" key={index}>
            <Slider
              onChange={(value: number): void =>
                handleSetVideoRate(index, value)
              }
              min={0.1}
              max={5}
              step={0.1}
              defaultValue={1}
              value={item.playbackRate}
            />
            <div className="rate-wrapper">
              {item.paused ? (
                <PlayCircleOutlined
                  className="icon-control"
                  onClick={(): Promise<void> => props.onPlay(index)}
                />
              ) : (
                <PauseCircleOutlined
                  className="icon-control"
                  onClick={(): Promise<void> => props.onPause(index)}
                />
              )}
              {item.muted ? (
                <AudioMutedOutlined
                  className="icon-control middle"
                  onClick={(): Promise<void> =>
                    props.onMuted(index, !item.muted)
                  }
                />
              ) : (
                <AudioOutlined
                  className="icon-control middle"
                  onClick={(): Promise<void> =>
                    props.onMuted(index, !item.muted)
                  }
                />
              )}
              {RATES.map(rate => (
                <Button
                  key={rate}
                  onClick={(): void => handleClickRate(index, rate)}
                  size="small"
                  type={rate === 1 ? "primary" : "default"}
                  disabled={rate === item.playbackRate}
                >
                  {rate === 1 ? "Reset" : `✖️${rate}`}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
