import React, { FunctionComponent } from "react";
import { Header } from "@/components/header";
import { Control } from "@/components/control";
import { Hello } from "@/components/hello";
import { browser } from "webextension-polyfill-ts";
import { Scroller } from "@/components/scroller";
import "./styles.scss";

// import h from "@/assets/header.png";
//
// console.log(h);

// // // //

export const Popup: FunctionComponent = () => {
  // Sends the `popupMounted` event
  React.useEffect(() => {
    browser.runtime.sendMessage({ popupMounted: true });
  }, []);

  // Renders the component tree
  return (
    <div className="popup-container">
      <div
        className="container"
        style={{
          backgroundImage: require.resolve("@/assets/header.png"),
        }}
      >
        {/*<img src={h} alt=""/>*/}
        <Header />
        <Control />
        <Hello />
        <hr />
        <Scroller />
      </div>
    </div>
  );
};
