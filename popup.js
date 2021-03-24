let psaSelectors = {
  certification: {
    selector: "//th[text()='Certification Number']/parent::tr/td",
    nextSibling: true,
  },
  labelType: {
    selector: "//th[text()='Label Type']/parent::tr/td",
    nextSibling: false,
  },
  year: {
    selector: "//th[text()='Year']/parent::tr/td",
    nextSibling: true,
  },
  brand: {
    selector: "//th[text()='Brand']/parent::tr/td",
    nextSibling: true,
  },
  sport: {
    selector: "//th[text()='Sport']/parent::tr/td",
    nextSibling: true,
  },
  cardHash: {
    selector: "//th[text()='Card Number']/parent::tr/td",
    nextSibling: true,
  },
  player: {
    selector: "//th[text()='Player']/parent::tr/td",
    nextSibling: true,
  },
  variety_pedigree: {
    selector: "//th[text()='Variety/Pedigree']/parent::tr/td",
    nextSibling: true,
  },
  grade: {
    selector: "//th[text()='Grade']/parent::tr/td",
    nextSibling: true,
  },
};
let sgcSelectors = {
  certification: {
    selector: "//h4[text()='SEARCHED AUTH CODE:']/span",
    nextSibling: true,
  },
  labelType: {
    selector: "//h4[text()='Set:']/span",
    nextSibling: false,
  },
  year: {
    selector: "//h4[text()='Set:']/span",
    regex: "\\d+",
  },
  brand: {
    selector: "//th[text()='Brand']/parent::tr/td",
    nextSibling: true,
  },
  sport: {
    selector: "//th[text()='Sport']/parent::tr/td",
    nextSibling: true,
  },
  cardHash: {
    selector: "//h4[text()='Card #:']/span",
  },
  player: {
    selector: "",
    nextSibling: true,
  },
  variety_pedigree: {
    selector: "",
  },
  grade: {
    selector: "//h4[text()='Grade:']/span",
  },
  description: {
    selector: "//h4[text()='Description:']/span",
  },
};

let pcgsSelectors = {
  certification: {
    selector: "//td [text()='Cert #']/following-sibling::td",
    nextSibling: true,
  },
  labelType: {
    selector: "//h4[text()='Set:']/span",
    nextSibling: false,
  },
  year: {
    selector: "",
    nextSibling: true,
  },
  brand: {
    selector: "//th[text()='Brand']/parent::tr/td",
    nextSibling: true,
  },
  sport: {
    selector: "//th[text()='Sport']/parent::tr/td",
    nextSibling: true,
  },
  cardHash: {
    selector: "//td [text()='PCGS #']/following-sibling::td",
  },
  player: {
    selector: "",
    nextSibling: true,
  },
  variety_pedigree: {
    selector: "",
  },
  grade: {
    selector: "//td [text()='Grade']/following-sibling::td",
  },
  description: {
    selector: "//h4[text()='Description:']/span",
  },
};

let ngcSelectors = {
  certification: {
    selector: "//dt[text()='NGC Cert #']/parent::dl/dd",
    nextSibling: true,
  },
  labelType: {
    selector: "//dt[text()='NGC Description']/parent::dl/dd",
    nextSibling: false,
  },
  year: {
    selector: "",
    nextSibling: true,
  },
  brand: {
    selector: "//th[text()='Brand']/parent::tr/td",
    nextSibling: true,
  },
  sport: {
    selector: "//th[text()='Sport']/parent::tr/td",
    nextSibling: true,
  },
  cardHash: {
    selector: "",
  },
  player: {
    selector: "",
    nextSibling: true,
  },
  variety_pedigree: {
    selector: "",
  },
  grade: {
    selector: "//dt[text()='NGC Grade']/parent::dl/dd",
  },
};

document.getElementById("close").onclick = function () {
  window.close();
};

const redirectToDetails = () => {
  chrome.storage.sync.get(["websiteJson"], function (result) {
    const websiteData = result.websiteJson;
    if (Object.keys(websiteData).length) {
      window.location = chrome.runtime.getURL("./templates/details.html");
    }
  });
};

// if storage contains scanned data then send users to details template
window.onload = function () {
  redirectToDetails();
};

const onExecuted = () => {
  redirectToDetails();
};

// Button Click of PSA
document.getElementById("scanPSA").onclick = function () {
  chrome.tabs.executeScript(
    {
      code: "var config = " + JSON.stringify(psaSelectors),
    },
    function () {
      chrome.tabs.executeScript({ file: "content.js" }, function () {
        onExecuted();
      });
    }
  );
};
document.getElementById("scanSGC").onclick = function () {
  chrome.tabs.executeScript(
    {
      code: "var config = " + JSON.stringify(sgcSelectors),
    },
    function () {
      chrome.tabs.executeScript({ file: "content.js" }, function () {
        onExecuted();
      });
    }
  );
};
document.getElementById("scanPCGS").onclick = function () {
  chrome.tabs.executeScript(
    {
      code: "var config = " + JSON.stringify(pcgsSelectors),
    },
    function () {
      chrome.tabs.executeScript({ file: "content.js" }, function () {
        onExecuted();
      });
    }
  );
};
document.getElementById("scanNGC").onclick = function () {
  chrome.tabs.executeScript(
    {
      code: "var config = " + JSON.stringify(ngcSelectors),
    },
    function () {
      chrome.tabs.executeScript({ file: "content.js" }, function () {
        onExecuted();
      });
    }
  );
};
