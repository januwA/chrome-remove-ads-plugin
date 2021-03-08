let contextmenu_liveid = 0;
// chrome.runtime.onMessage.addListener(async function (
//   msg,
//   sender,
//   sendResponse
// ) {
//   if (!msg.flag) return;

//   // 姐搜直播间ID
//   if (msg.flag & MsgFlags.bilibili_com.contextmenu_liveid) {
//     contextmenu_liveid = msg.data.id;
//   }

//   // 进入页面初始化，返回ids
//   if (msg.flag & MsgFlags.bilibili_com.load_liveid) {
//     let live_ids = await storage_get("live_ids");
//     chrome.tabs.sendMessage(
//       sender.tab.id,
//       new MsgData(MsgFlags.bilibili_com.load_liveid, {
//         isAdd: true,
//         id: 0,
//         ids: live_ids ?? [],
//       })
//     );
//   }
// });

/*============创建右键上下文菜单============*/
// chrome.contextMenus.create(
//   {
//     id: chrome.runtime.id,
//     title: "取消/屏蔽直播间",
//     contexts: [chrome.contextMenus.ContextType.ALL],
//     documentUrlPatterns: [`*://*.bilibili.com/*`],
//   },
//   function () {
//     if (chrome.runtime.lastError) {
//       console.log(chrome.runtime.lastError.message);
//     }
//   }
// );

// chrome.contextMenus.onClicked.addListener(async function (info, tab) {
//   if (!contextmenu_liveid) return;

//   // save to list
//   let live_ids = await storage_get("live_ids");
//   if (!live_ids) chrome.storage.sync.set({ live_ids: [] });

//   if (live_ids.includes(contextmenu_liveid)) {
//     // 已存在，取消屏蔽
//     live_ids = live_ids.filter((it) => it != contextmenu_liveid);
//   } else {
//     // 添加屏蔽
//     live_ids.push(contextmenu_liveid);
//   }
//   storage_set("live_ids", live_ids);
//   contextmenu_liveid = 0;
// });

// chrome.storage.onChanged.addListener(function (changes, areaName) {
//   if (changes.live_ids) {
//     let { newValue, oldValue } = changes.live_ids;
//     const isAdd = newValue.length > oldValue.length;
//     chrome.tabs.query(
//       {
//         active: true,
//         currentWindow: true,
//       },
//       (tabs) => {
//         tabs.forEach((tab) => {
//           chrome.tabs.sendMessage(
//             tab.id,
//             new MsgData(MsgFlags.bilibili_com.load_liveid, {
//               isAdd,
//               id: isAdd
//                 ? 0
//                 : newValue.find((it, i) => it != oldValue[i]) ??
//                   oldValue[oldValue.length - 1],
//               ids: newValue,
//             })
//           );
//         });
//       }
//     );
//   }
// });
