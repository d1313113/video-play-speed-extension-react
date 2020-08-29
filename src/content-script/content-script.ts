import { browser } from "webextension-polyfill-ts";
import {
  actionTypes,
  getVideosStatus,
  setVideoPause,
  setVideoPlay,
  setVideoPlaybackRate,
  setVideoMuted
} from "./actions/videosPlaybackRate";
import MessageSender = chrome.runtime.onMessage;

interface Request {
  idx: number;
  action: string;
  value?: number;
  muted?: boolean;
}

browser.runtime.onMessage.addListener(
  // @ts-ignore
  (
    request: Request,
    sender: typeof MessageSender,
    // @ts-ignore
    sendResponse
  ) => {
    switch (request.action) {
      case actionTypes.GET_VIDEOS_STATUS:
        sendResponse(getVideosStatus());
        return;

      case actionTypes.SET_VIDEO_PLAYBACK_RATE: {
        const { idx, value } = request;
        if (value != null) {
          setVideoPlaybackRate(idx, value);
        }
        return;
      }

      case actionTypes.SET_VIDEO_PLAY: {
        const { idx } = request;
        setVideoPlay(idx);
        return;
      }

      case actionTypes.SET_VIDEO_PAUSE: {
        const { idx } = request;
        setVideoPause(idx);
        return;
      }

      case actionTypes.SWITCH_VIDEO_MUTED: {
        const { idx, muted } = request;
        if (muted != null) {
          setVideoMuted(idx, muted);
          return;
        }
      }
    }
    throw new Error("Unhandled request: " + JSON.stringify(request));
  }
);
