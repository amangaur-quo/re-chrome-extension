const psaSelectors = {
  certification: {
    selector: "#mainContent > div > table > tbody > tr:nth-child(1) > th",
    nextSibling: true,
  },
  labelType: {
    selector:
      "#mainContent > div > table > tbody > tr:nth-child(2) > td > span",
  },
  year: {
    selector: "#mainContent > div > table > tbody > tr:nth-child(4) > th",
    nextSibling: true,
  },
  brand: {
    selector: "#mainContent > div > table > tbody > tr:nth-child(5) > th",
    nextSibling: true,
  },
  sport: {
    selector: "#mainContent > div > table > tbody > tr:nth-child(6) > th",
    nextSibling: true,
  },
  cardHash: {
    selector: "#mainContent > div > table > tbody > tr:nth-child(7) > th",
    nextSibling: true,
  },
  player: {
    selector: "#mainContent > div > table > tbody > tr:nth-child(8) > th",
    nextSibling: true,
  },
  variety_pedigree: {
    selector: "#mainContent > div > table > tbody > tr:nth-child(9) > th",
    nextSibling: true,
  },
  grade: {
    selector: "#mainContent > div > table > tbody > tr:nth-child(10) > th",
    nextSibling: true,
  },
};

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

let data = executeSelectors(psaSelectors);
console.log(data);