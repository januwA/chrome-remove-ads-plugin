// const filterUrl = ["desktophut.com", "torrents2download.com", "get-url.com"];
const STORAGE_KEY = "filter-urls";

// 监听tabs的创建
chrome.tabs.onCreated.addListener(function (tab) {
  if (!tab.title && !tab.url && tab.openerTabId) {
    chrome.tabs.get(tab.openerTabId, async (openerTab) => {
      let urls = (await storage_get(STORAGE_KEY)) ?? [];
      if (urls.some((it) => openerTab.url.includes(it))) {
        console.log(tab);
        chrome.tabs.remove(tab.id);
      }
    });
  }
});