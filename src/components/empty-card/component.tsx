import React, { FC } from "react";
import { Empty } from "antd";
import "./styles.scss";

export const EmptyCard: FC = () => (
  <section className="empty-wrapper">
    <Empty className="empty" description="当前页面未找到视频:)" />
  </section>
);
