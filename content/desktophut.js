removeDom(".g1-injected-unit");
removeDom("#custom_html-7");
removeDom(".g1-sticky-widget-wrapper");
removeDom("#google_esf");

setInterval(() => {
  document.querySelectorAll("iframe")?.forEach((it) => {
    if (it.hasAttribute("sandbox")) {
      it.remove();
    }
  });

  document.querySelectorAll("div").forEach((it) => {
    if (it.style.zIndex && parseInt(it.style.zIndex) > 5000) {
      it.remove();
    }
  });

  document.querySelector('#vid-container0')?.remove()
  document.querySelector('.ads')?.remove()

}, 500);
