chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (!msg.flag) return;

  if (msg.flag & MsgFlags.bilibili_com.load_liveid) {
    if (msg?.data?.ids?.length) {
      Array.from(document.querySelector(".list.clearfix").children).forEach(
        (li) => {
          const m = li.querySelector("a")?.href.match(/\/([0-9]+)\?/);
          if (m && m[1] && msg.data?.ids?.includes(m[1])) {
            li.style.transform = "scale(0)";
          }
        }
      );
    }
  }
});

setInterval(() => {
  removeDom(".banner-card");
}, 400);

removeDom("#reportFirst2");

document.addEventListener("contextmenu", (e) => {
  const a = e.path.find((it) => {
    return it?.classList?.contains("dp-block");
  });
  if (a && a.nodeName === "A".toUpperCase()) {
    const m = a.href.match(/\/([0-9]+)\?/);
    if (!m || !m[1]) {
      console.warn("not match id");
      return;
    }

    const id = m[1].trim();
    // 将消息发送到bk
    chrome.runtime.sendMessage(
      new MsgData(MsgFlags.bilibili_com.contextmenu_liveid, {
        id,
      })
    );
  }
});

chrome.runtime.sendMessage(new MsgData(MsgFlags.bilibili_com.load_liveid));
