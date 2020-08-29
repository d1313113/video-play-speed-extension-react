export function $$<T extends Element>(selector: string): NodeListOf<T> {
  return document.querySelectorAll<T>(selector);
}

/**
 * @return {number[]}
 */
export function getVideosPlaybackRate(): number[] {
  const videos = $$<HTMLVideoElement>("video");
  return videos.length ? Array.from(videos).map(el => el.playbackRate) : [];
}
export const GET_VIDEOS_PLAYBACK_RATE = "GET_VIDEOS_PLAYBACK_RATE";

/**
 * @param {number} idx
 * @param {number} value
 */
export function setVideoPlaybackRate(idx: number, value: number): void {
  $$<HTMLVideoElement>("video")[idx].playbackRate = value;
}
export const SET_VIDEO_PLAYBACK_RATE = "SET_VIDEO_PLAYBACK_RATE";
