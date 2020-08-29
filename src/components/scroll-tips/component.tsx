import React, { FC } from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import "./styles.scss";

export const ScrollTips: FC = () => (
  <section className="tips-wrapper">
    <div className="tips">Scroll to load more</div>
    <DoubleRightOutlined
      className="icon-tips"
      rotate={90}
      style={{ fontSize: "20px" }}
    />
  </section>
);
