const executeSelectors = function (config) {
  const refinedObject = {};
  Object.keys(config).map(function (key, index) {
    const selector = document.querySelector(config[key].selector);
    const textContent =
      selector && selector.nextSibling
        ? selector.nextSibling.textContent
        : selector.textContent;
    refinedObject[key] = textContent;
  });
  return refinedObject;
};

let data = executeSelectors(config);
chrome.storage.sync.set({ websiteJson: data }, function () {
  console.log("value set");
});
