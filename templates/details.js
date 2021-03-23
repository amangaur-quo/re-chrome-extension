let backbtn = document.getElementById("back");
backbtn.addEventListener("click", Back);
function Back() {
  window.location.href = "/popup.html";
  chrome.storage.sync.remove("websiteJson");
}

let fillbtn = document.getElementById("FillValues");
fillbtn.addEventListener("click", fillForm);
function fillForm() {}

// Set values in deatils template
chrome.storage.sync.get(["websiteJson"], function (result) {
  console.log("Value currently is " + JSON.stringify(result));
  const websiteData = result.websiteJson;
  console.log("websiteDate", websiteData);
  document.getElementById("certification").innerText =
    websiteData.certification;
  document.getElementById("labelType").innerText = websiteData.labelType;
  document.getElementById("year").innerText = websiteData.year;
  document.getElementById("brand").innerText = websiteData.brand;
  document.getElementById("sport").innerText = websiteData.sport;
  document.getElementById("cardHash").innerText = websiteData.cardHash;
  document.getElementById("player").innerText = websiteData.player;
  document.getElementById("varietyPedigree").innerText =
    websiteData.variety_pedigree;
  document.getElementById("cardGrade").innerText = websiteData.grade;
});

document.getElementById("FillValues").addEventListener("click", () => {
  chrome.tabs.executeScript({
    file: "fill.js",
  });
});
