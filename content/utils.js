function removeDom(select) {
  document.querySelectorAll(select).forEach((it) => {
    it.remove();
  });
}