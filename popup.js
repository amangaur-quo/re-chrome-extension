var tab_title = "";
let psaSelectors = {
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
function display_h1(results) {
  h1 = results;
  document.querySelector("#id1").innerHTML =
    "<p>tab title: " + tab_title + "</p><p>dom h1: " + h1 + "</p>";
}

function onExecuted(result) {
  console.log(`We made it green`);
  window.location = chrome.runtime.getURL("Details.html");
}

function onError(error) {
  console.log(`Error: ${error}`);
}

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
  // Scan Page from PSA, Save to chrome storage
  // On re-open, fetch content from chrome if data is stored in storage
  // On click of fill details, patch values in angular form, remove content from chrome storage
};
