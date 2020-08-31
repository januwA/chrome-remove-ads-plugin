const STORAGE_KEY = "filter-urls";

let url_list_target;
let url_list;

window.addEventListener("load", async (e) => {
  let urls = (await storage_get(STORAGE_KEY)) ?? [];
  url_list_target = urls;
  url_list = new Proxy(url_list_target, {
    set(target, key, value) {
      Reflect.set(target, key, value);
      updateUrlListUi(target);
      return true;
    },
  });

  updateUrlListUi(url_list_target);
});

const el_list_ul = document.querySelector(".list");
const el_input_url = document.querySelector(".input-url");
const el_add_btn = document.querySelector(".add-url");
const el_del_btn = document.querySelector(".del-url");

el_add_btn.addEventListener("click", (e) => {
  const url = getInputUrlValue();
  if (url && !url_list.includes(url)) {
    url_list.push(url);
    storage_set(STORAGE_KEY, url_list_target);
    el_input_url.value = "";
  }
});
el_del_btn.addEventListener("click", (e) => {
  const url = getInputUrlValue();
  const index = url_list.findIndex((it) => it === url);
  if (index < 0) return;
  url_list.splice(index, 1);
  storage_set(STORAGE_KEY, url_list_target);
  el_input_url.value = "";
});

function updateUrlListUi(listUrl) {
  const els_li = el_list_ul.querySelectorAll("li");
  els_li.forEach((li, i) => li.remove());

  listUrl.forEach((it) => {
    const li = document.createElement("li");
    li.textContent = it;
    el_list_ul.append(li);
  });
}

function getInputUrlValue() {
  return el_input_url.value.trim();
}
