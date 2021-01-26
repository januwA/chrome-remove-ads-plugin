let [a, b, c] = location.host.split(".");

if (b === "nicotv") {
  if (window.location.pathname === "/") {
    document.querySelector(".container.ff-bg")?.remove();
  }

  setInterval(function () {
    document.querySelector("#ff-totop")?.nextSibling?.remove();
    document.querySelectorAll("div[style]").forEach((it) => {
      if (it.style["z-index"] && it.style["z-index"] > 2000) {
        it.remove();
      }
    });
  }, 1000);
}
