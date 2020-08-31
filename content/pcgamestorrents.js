removeDom('#widget-advads_ad_widget-3');
setInterval(() => {
  document.querySelectorAll('iframe').forEach(it => {
    console.log(it);
    it.remove()
  })
}, 1000)