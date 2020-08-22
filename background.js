// 将消息发送给 content.js
// function sendMessage(meg, cb = null) {
//   chrome.tabs.query(
//     {
//       active: true,
//       currentWindow: true,
//     },
//     (tabs) => {
//       tabs.forEach((tab) => {
//         chrome.tabs.sendMessage(tab.id, meg, 0, cb);
//       });
//     }
//   );
// }

// 需要过滤的网站
const filterUrl = ["desktophut.com"];

// 监听tabs的创建
chrome.tabs.onCreated.addListener(function (tab) {
  if (!tab.title && !tab.url && tab.openerTabId) {
    chrome.tabs.get(tab.openerTabId, (openerTab) => {
      if (filterUrl.some((it) => openerTab.url.includes(it))) {
        console.log(tab);
        chrome.tabs.remove(tab.id);
      }
    });
  }
});

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   console.log(message);
//   // console.log(sender);
//   // console.log(sendResponse);
//   chrome.tabs.sendMessage(sender.tab.id, "hi i am background.js");
// });
