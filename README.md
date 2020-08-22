屏蔽页面广告

- manifest: https://developer.chrome.com/extensions/manifest
- chrome.tabs: https://developer.chrome.com/extensions/tabs
- chrome.runtime: https://developer.chrome.com/extensions/runtime
- permissions: https://developer.chrome.com/extensions/declare_permissions
- content.js 通常就是用户浏览时的环境 可以操作 DOM
- background.js chrome后台自动运行,debug信息可以在 chrome://extensions/ 插件上的查看视图中看到,在浏览器的F12中看不到打印信息
- popup.js 在浏览器工具栏中的图标，点击图标才会执行的脚本


## 前后端脚本基本通信

content:
```js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
});

chrome.runtime.sendMessage("i am content.js");
```

background:
```js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message);
  // console.log(sender);
  // console.log(sendResponse);
  chrome.tabs.sendMessage(sender.tab.id, "hi i am background.js");
});
```