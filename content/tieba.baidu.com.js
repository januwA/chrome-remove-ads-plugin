setInterval(() => {
  // 主页帖子列表
  Array.from(document.querySelector("#thread_list")?.children ?? [])?.forEach(
    (e) => {
      if (!e.className.includes("list")) {
        e.remove();
      }
    }
  );

  // 进贴
  Array.from(document.querySelector("#j_p_postlist")?.children ?? [])?.forEach(
    (e) => {
      if (e.hasAttribute("ad-dom-img")) {
        e.remove();
      }
    }
  );
}, 2000);
