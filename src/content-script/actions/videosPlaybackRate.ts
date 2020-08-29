export function $$<T extends Element>(selector: string): NodeListOf<T> {
  return document.querySelectorAll<T>(selector);
}

export const enum actionTypes {
  GET_VIDEOS_STATUS = "GET_VIDEOS_STATUS",
  SET_VIDEO_PLAYBACK_RATE = "SET_VIDEO_PLAYBACK_RATE",
  SET_VIDEO_PLAY = "SET_VIDEO_PLAY",
  SET_VIDEO_PAUSE = "SET_VIDEO_PAUSE"
}

export interface VideoStatus {
  playbackRate: number;
  paused: boolean;
  muted: boolean;
}

/**
 * @return {number[]}
 */
export function getVideosStatus(): VideoStatus[] {
  const videos = $$<HTMLVideoElement>("video");
  if (videos.length) {
    return Array.from(videos).map(el => ({
      playbackRate: el.playbackRate,
      paused: el.paused,
      muted: el.muted
    }));
  }
  return [];
}

/**
 * @param {number} idx
 * @param {number} value
 */
export function setVideoPlaybackRate(idx: number, value: number): void {
  $$<HTMLVideoElement>("video")[idx].playbackRate = value;
}

/**
 * @param {number} idx
 */
export function setVideoPlay(idx: number): void {
  $$<HTMLVideoElement>("video")[idx].play();
}

/**
 * @param {number} idx
 */
export function setVideoPause(idx: number): void {
  $$<HTMLVideoElement>("video")[idx].pause();
}
