import { browser } from "webextension-polyfill-ts";
import {
  GET_VIDEOS_PLAYBACK_RATE,
  getVideosPlaybackRate,
  SET_VIDEO_PLAYBACK_RATE,
  setVideoPlaybackRate
} from "./actions/videosPlaybackRate";
import MessageSender = chrome.runtime.onMessage;

browser.runtime.onMessage.addListener(
  // @ts-ignore
  (request: any, sender: MessageSender, sendResponse) => {
    switch (request.action) {
      case GET_VIDEOS_PLAYBACK_RATE:
        sendResponse(getVideosPlaybackRate());
        return;

      case SET_VIDEO_PLAYBACK_RATE: {
        const { idx, value } = request;
        setVideoPlaybackRate(idx, value);
        return;
      }
    }
    throw new Error("Unhandled request: " + JSON.stringify(request));
  }
);
