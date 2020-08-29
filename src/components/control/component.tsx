import React, { FC } from "react";
import "./styles.scss";
import { Slider, Button } from "antd";

const RATES = [1, 2, 3, 4, 5];

interface ControlProps {
  videoList: number[];
  onSetRate: (idx: number, value: number) => Promise<void>;
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
        {videoList.map((vRate, index) => (
          <div className="video-item" key={index}>
            <Slider
              onChange={(value: number): void =>
                handleSetVideoRate(index, value)
              }
              min={0.1}
              max={5}
              step={0.1}
              defaultValue={1}
              value={vRate}
            />
            <div className="rate-wrapper">
              {RATES.map(rate => (
                <Button
                  key={rate}
                  onClick={(): void => handleClickRate(index, rate)}
                  size="small"
                  type={rate === 1 ? "primary" : "default"}
                  disabled={rate === vRate}
                >
                  {rate === 1 ? "Reset" : `✖️${rate}倍`}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
