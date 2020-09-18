const one = document.querySelector(".container.ff-bg");
if (
  one &&
  one.getClientRects()[0].height > 200 &&
  one.getClientRects()[0].height < 300
) {
  one.remove();
}

setInterval(function () {
  document.querySelector("#ff-totop")?.nextSibling?.remove();
}, 1000);
