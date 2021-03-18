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

document.getElementById("scan-page-content").onclick = function () {
  chrome.tabs.executeScript(
    {
      code: "var config = " + JSON.stringify(psaSelectors),
    },
    function () {
      chrome.tabs.executeScript({ file: "content.js" });
    }
  );
  chrome.storage.sync.get(["websiteJson"], function (result) {
    console.log("Value currently is " + JSON.stringify(result));
    document.getElementById("container").innerHTML = JSON.stringify(
      result.websiteJson
    );
  });
};
