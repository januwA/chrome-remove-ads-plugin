function removeDom(select) {
  document.querySelectorAll(select).forEach((it) => {
    it.remove();
  });
}

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
