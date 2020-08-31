function storage_get(key) {
  return new Promise((res) => {
    chrome.storage.sync.get([key], function (r) {
      res(r[key] ?? null);
    });
  });
}

function storage_set(key, value) {
  chrome.storage.sync.set({ [key]: value });
}
window.storage_get = storage_get;
window.storage_set = storage_set;