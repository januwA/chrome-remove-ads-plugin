// 消息标记
const MsgFlags = {
  bilibili_com: {
    // 屏蔽直播间消息
    contextmenu_liveid: 1 << 1,

    // 获取屏蔽直播间 id列表
    load_liveid: 1 << 2,
  },
  new_tab: {
    add: 1 << 1,
    del: 1 << 2,
    get_list: 1 << 3,
  },
};

// 消息数据
class MsgData {
  constructor(flag, data) {
    this.flag = flag;
    this.data = data;
  }
}

// 定义全局属性，注意别冲突了
window.MsgFlags = MsgFlags;
window.MsgData = MsgData;
