class MsgData {
  constructor(flag, data) {
    this.flag = flag;
    this.data = data;
  }
}

const MsgFlags = {
  bilibili_com: {
    // 屏蔽直播间消息
    contextmenu_liveid: 1 << 1,

    // 获取屏蔽直播间 id列表
    load_liveid: 1 << 2,
  },
};

let contextmenu_liveid = 0;

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (!msg.flag) return;

  if (msg.flag & MsgFlags.bilibili_com.contextmenu_liveid) {
    contextmenu_liveid = msg.data.id;
  }

  if (msg.flag & MsgFlags.bilibili_com.load_liveid) {
    chrome.storage.sync.get(["live_ids"], function (r) {
      const data = r?.live_ids ?? [];
      chrome.tabs.sendMessage(
        sender.tab.id,
        new MsgData(MsgFlags.bilibili_com.load_liveid, {
          ids: data,
        })
      );
    });
  }
});

// 需要过滤的网站
const filterUrl = ["desktophut.com", "torrents2download.com"];

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

// ============创建右键上下文菜单============

chrome.contextMenus.create(
  {
    id: chrome.runtime.id,
    title: "Ajanuw",
    contexts: [chrome.contextMenus.ContextType.ALL],
    documentUrlPatterns: [`*://*.bilibili.com/*`],
  },
  function () {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError.message);
    }
  }
);

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (contextmenu_liveid) {
    // save to list
    chrome.storage.sync.get(["live_ids"], function (r) {
      if (!r.live_ids) chrome.storage.sync.set({ live_ids: [] });

      chrome.storage.sync.get(["live_ids"], function ({ live_ids }) {
        if (!live_ids.includes(contextmenu_liveid)) {
          live_ids.push(contextmenu_liveid);
          chrome.storage.sync.set({ live_ids });
        }
        contextmenu_liveid = 0;
      });
    });
  }
});

chrome.storage.onChanged.addListener(function (changes, areaName) {
  if (changes.live_ids) {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      (tabs) => {
        tabs.forEach((tab) => {
          chrome.tabs.sendMessage(
            tab.id,
            new MsgData(MsgFlags.bilibili_com.load_liveid, {
              ids: changes.live_ids.newValue,
            })
          );
        });
      }
    );
  }
});
