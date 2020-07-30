function removeDom(select) {
  let d = document.querySelector(select);
  if(d) d.remove();
}

removeDom('.container.ff-bg')