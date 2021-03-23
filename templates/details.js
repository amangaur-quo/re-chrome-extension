// Back button
document.getElementById("back").addEventListener("click", function () {
  window.location.href = "/popup.html";
  chrome.storage.sync.remove("websiteJson");
});

// Set values in deatils template
chrome.storage.sync.get(["websiteJson"], function (result) {
  const websiteData = result.websiteJson;
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

// Fill Values in Rare edition form component
document.getElementById("fillValues").addEventListener("click", () => {
  chrome.tabs.executeScript({
    file: "fill.js",
  });
});
