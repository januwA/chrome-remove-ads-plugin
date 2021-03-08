// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//   if (!msg.flag) return;

//   if (msg.flag & MsgFlags.bilibili_com.load_liveid) {
//     if (!msg?.data?.ids?.length) return;

//     const listLi = Array.from(
//       document.querySelector("ul.list")?.children ?? []
//     );
//     if (!listLi.length) return;

//     let index = 0;
//     listLi.forEach((li) => {
//       const m = li.querySelector("a")?.href.match(/\/([0-9]+)\?/);
//       const liveID = m[1] ?? 0;
//       if (msg?.data?.isAdd) {
//         if (m && liveID && msg.data?.ids?.includes(liveID)) {
//           li.style.filter = "blur(20px)";
//           if (index > msg.data?.ids.length) return true;
//           index++;
//         }
//       } else {
//         if (m && liveID && liveID == msg?.data?.id)
//           return (li.style.filter = "blur(0px)");
//       }
//     });
//   }
// });

setInterval(() => {
  removeDom(".banner-card");
  removeDom("#reportFirst2");
  removeDom("#bili_manga");
  removeDom("#bili_cheese");
  removeDom("#bili_digital");
  removeDom("#bili_life");
  removeDom("#bili_information");
  removeDom("#bili_ent");
  removeDom("#bili_read");
  removeDom("#bili_movie");
  removeDom("#bili_teleplay");
  removeDom("#bili_cinephile");
  removeDom("#bili_documentary");
  removeDom("#bili_report_spe_rec");
  removeDom("#bili_fashion");
  removeDom("#bili_technology");
  removeDom("#bili_guochuang");
  removeDom(".live-tabs");
}, 1000);

// document.addEventListener("contextmenu", (e) => {
//   const a = e.path.find((it) => {
//     return it?.classList?.contains("dp-block");
//   });
//   if (a && a.nodeName === "A".toUpperCase()) {
//     const m = a.href.match(/\/([0-9]+)\?/);
//     if (!m || !m[1]) {
//       console.warn("not match id");
//       return;
//     }

//     const id = m[1].trim();
//     // 将消息发送到bk
//     chrome.runtime.sendMessage(
//       new MsgData(MsgFlags.bilibili_com.contextmenu_liveid, {
//         id,
//       })
//     );
//   }
// });

// chrome.runtime.sendMessage(new MsgData(MsgFlags.bilibili_com.load_liveid));
