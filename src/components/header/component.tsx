import React, { FC } from "react";
import "./styles.scss";
import { PlayCircleOutlined } from "@ant-design/icons";

export const Header: FC = () => {
  return (
    <header className="header-wrapper">
      <PlayCircleOutlined className="icon-play" />
      <span className="title">视频播放速度调节插件</span>
    </header>
  );
};
