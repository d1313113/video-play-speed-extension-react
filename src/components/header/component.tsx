import React, { FC } from "react";
import "./styles.scss";

export const Header: FC = () => {
  return (
    <header className="header-wrapper">
      <div className="title">视频播放速度调节插件</div>
      <div className="sub-title">可以让你轻松调整视频播放速度</div>
    </header>
  );
};
