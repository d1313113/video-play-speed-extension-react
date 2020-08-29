import React, { FC, useEffect, useState } from "react";
import { browser } from "webextension-polyfill-ts";
import { throttle } from "lodash";
import getCurrentTab from "@/utils/getCurrentTab";
import {
  actionTypes,
  VideoStatus,
  $$
} from "@/content-script/actions/videosPlaybackRate";

import { Header } from "@/components/header";
import { EmptyCard } from "@/components/empty-card";
import { Control } from "@/components/control";
import { ScrollTips } from "@/components/scroll-tips";
import "./styles.scss";

export const Popup: FC = () => {
  const [videoList, setVideoList] = useState<VideoStatus[]>([]);
  const [scrollTop, setScrollTop] = useState<number>(0);

  const initPopUp = async (): Promise<void> => {
    console.log(11111);
    const { id: tabId } = await getCurrentTab();
    if (tabId != null) {
      const resp: VideoStatus[] = await browser.tabs.sendMessage(tabId, {
        action: actionTypes.GET_VIDEOS_STATUS
      });
      setVideoList(resp);
    }
  };

  const handleSetVideoRate = async (
    idx: number,
    value: number
  ): Promise<void> => {
    const { id: tabId } = await getCurrentTab();

    if (tabId != null) {
      await browser.tabs.sendMessage(tabId, {
        action: actionTypes.SET_VIDEO_PLAYBACK_RATE,
        idx,
        value
      });
      initPopUp();
    }
  };

  const handleSetVideoPlay = async (idx: number): Promise<void> => {
    const { id: tabId } = await getCurrentTab();

    if (tabId != null) {
      await browser.tabs.sendMessage(tabId, {
        action: actionTypes.SET_VIDEO_PLAY,
        idx
      });
      initPopUp();
    }
  };

  const handleSetVideoPause = async (idx: number): Promise<void> => {
    const { id: tabId } = await getCurrentTab();

    if (tabId != null) {
      await browser.tabs.sendMessage(tabId, {
        action: actionTypes.SET_VIDEO_PAUSE,
        idx
      });
      initPopUp();
    }
  };

  const handleScroll = (html: HTMLElement): void => {
    try {
      const { scrollTop } = html;
      setScrollTop(scrollTop);
    } catch (e) {
      console.error(e);
    }
  };

  // Sends the `popupMounted` event
  useEffect(() => {
    browser.runtime.sendMessage({ popupMounted: true });
    initPopUp();
    const html = $$<HTMLElement>("html")[0];
    const _throttle = throttle((): void => handleScroll(html), 100);
    window.addEventListener("scroll", _throttle, false);

    return (): void => {
      window.removeEventListener("scroll", _throttle, false);
    };
  }, []);

  // Renders the component tree
  return (
    <div className="popup-container">
      <div className="container">
        <Header onReload={initPopUp} />
        {!videoList.length ? (
          <EmptyCard />
        ) : (
          <Control
            videoList={videoList}
            onSetRate={handleSetVideoRate}
            onPlay={handleSetVideoPlay}
            onPause={handleSetVideoPause}
          />
        )}
        {!!videoList.length && videoList.length > 5 && scrollTop < 30 && (
          <ScrollTips />
        )}
      </div>
    </div>
  );
};
