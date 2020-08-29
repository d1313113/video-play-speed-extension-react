import React, { FC, useState } from "react";
import { ReloadOutlined } from "@ant-design/icons";
import "./styles.scss";

interface HeaderProps {
  onReload: () => void;
}

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const [spin, setSpin] = useState<boolean>(false);

  const handleReload = (): void => {
    setSpin(!spin);
    if (!spin) {
      props.onReload();
      setTimeout((): void => {
        setSpin(false);
      }, 1000);
    }
  };

  return (
    <header className="header-wrapper">
      <div className="header-content">
        <div className="title">视频播放速度调节插件</div>
        <div className="sub-title">可以让你轻松调整视频播放速度</div>
      </div>
      <ReloadOutlined
        onClick={handleReload}
        className="icon-reload"
        spin={spin}
        style={{
          fontSize: "20px"
        }}
      />
    </header>
  );
};
