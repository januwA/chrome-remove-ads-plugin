// 监听后台发来的消息
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log(message);
// });
// chrome.runtime.sendMessage("i am content.js");

removeDom(".g1-injected-unit");
removeDom("#custom_html-7");
removeDom(".g1-sticky-widget-wrapper");
removeDom("#google_esf");

setInterval(() => {
  document.querySelectorAll("iframe")?.forEach((it) => {
    if (it.hasAttribute("sandbox")) {
      it.remove();
    }
  });
}, 500);
