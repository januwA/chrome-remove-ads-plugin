// namespace
const _bili = {
  a: true,
};

setInterval(() => {
  removeDom(".banner-card");
  removeDom("#reportFirst2");
  removeDom("#bili_manga");
  removeDom("#bili_cheese");
  removeDom("#bili_digital");
  removeDom("#bili_life");
  removeDom("#bili_information");
  removeDom("#bili_ent");
  removeDom("#bili_read");
  removeDom("#bili_movie");
  removeDom("#bili_teleplay");
  removeDom("#bili_cinephile");
  removeDom("#bili_documentary");
  removeDom("#bili_report_spe_rec");
  removeDom("#bili_fashion");
  removeDom("#bili_technology");
  removeDom("#bili_guochuang");
  removeDom(".live-tabs");

  // 屏蔽首页推荐的垃圾信息
  if (_bili.a) {
    const removeIt = document.querySelector("#internationalHeader")?.nextSibling
      ?.firstChild;

    if (removeIt?.classList?.contains?.("space-between") ?? false) {
      removeIt?.remove();
    }

    // 屏蔽banner上的背景图
    const baner = document.querySelector(".bili-banner");
    if (baner) baner.style.backgroundImage = "none";

    _bili.a = false;
  }
}, 1000);
