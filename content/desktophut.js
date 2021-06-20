setInterval(() => {
  let lastElementChild = document.body.lastElementChild;

  // 删除强制的弹窗
  if (
    lastElementChild.className.endsWith("-wrapper") ||
    lastElementChild.className.endsWith(" active")
  ) {
    lastElementChild.remove();
  }

  // 删除模糊效果
  for (const it of document.body.classList) {
    if (it.endsWith("-blur")) {
      document.body.classList.remove(it);
      break;
    }
  }
}, 500);
