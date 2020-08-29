import { browser, Tabs } from "webextension-polyfill-ts";

/**
 * @return {Promise<{ id: number, url?: string }>}
 */
export default async function(): Promise<Tabs.Tab> {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  if (!tabs.length) {
    throw new Error("No active tab available");
  }
  return tabs[0];
}
