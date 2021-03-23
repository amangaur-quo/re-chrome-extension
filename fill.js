elementIdsArray = [
  { title: "grade", id: "mat-input-4" },
  { title: "player", id: "mat-input-5" },
  { title: "sport", id: "mat-select-value-5" },
  { title: "brand", id: "mat-input-6" },
  { title: "year", id: "mat-input-7" },
  { title: "cardHash", id: "mat-input-8" },
];

(function fillForm() {
  chrome.storage.sync.get(["websiteJson"], function (result) {
    const websiteData = result.websiteJson;
    elementIdsArray.forEach((element) => {
      document.getElementById(element.id).value = websiteData[element.title];
      document.getElementById(element.id).dispatchEvent(new Event("input"));
    });
  });
})();
