// Execute DOM selectors for different configuration files
executeSelectors = function (config) {
  const refinedObject = {};
  Object.keys(config).map(function (key) {
    let selector = config[key].selector;
    if (selector) {
      const results = document.evaluate(
        selector,
        document,
        null,
        XPathResult.ANY_TYPE,
        null
      );
      while ((node = results.iterateNext())) {
        refinedObject[key] = node.textContent;
      }
    }
  });
  return refinedObject;
};

data = executeSelectors(config);

// Store website data in chrom storage to fetch it later
chrome.storage.sync.set({ websiteJson: data });
