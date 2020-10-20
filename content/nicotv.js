if (window.location.pathname === "/") {
  document.querySelector(".container.ff-bg")?.remove();
}

setInterval(function () {
  document.querySelector("#ff-totop")?.nextSibling?.remove();
}, 1000);
