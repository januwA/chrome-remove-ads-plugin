function removeDom(select) {
  document.querySelectorAll(select).forEach((it) => {
    it.remove();
  });
}

function hookSend(hook) {
  if (!XMLHttpRequest.prototype._oldSend)
    XMLHttpRequest.prototype._oldSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function () {
    if (hook && typeof hook === "function") hook([...arguments], this);
    return this._oldSend(...arguments);
  };
}

hookSend((a, c) => {
  console.log("args: %o, this: %o", a, c);
});