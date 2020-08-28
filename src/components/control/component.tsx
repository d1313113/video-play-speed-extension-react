import React, { FC } from "react";
import { Empty } from "antd";

export const Control: FC = () => {
  return (
    <section className="control">
      <Empty description="当前页面未找到视频:)" />
    </section>
  );
};
