function page_load_functions() {
  const widgetID = getLocation();
  loadWidget(widgetID);
  const gpcValue = navigator.globalPrivacyControl;
  if (gpcValue) {
    // signal detected, do something
    alert("GPC signal detected");
  }
}

function getLocation() {
  const locale = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const city = locale.split("/")[1];
  const region = locale.split("/")[0];
  console.log(region);
  //console.log(city);
  //document.getElementById("LocationDiv").innerHTML =
  //  "Region: " + region + "<br>" + "City: " + city;
  if (region == "America") {
    return 1;
  } else {
    return 2;
  }
}

function loadWidget(id) {
  src = "https://cscript-cdn-use-uat.cassiecloud.com/loader.js";
  var cassieSettings = {
    widgetProfileId: id,
    languageCode: "",
    licenseKey: "45B226BD-F41A-4604-BE52-034006BDDAFC",
    region: "use",
    environment: "UAT",
    crossDomainConsent: false,
  };
  window.CassieWidgetLoader = new CassieWidgetLoaderModule(cassieSettings);
}

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  const widgetID = getLocation();
  loadWidget(widgetID);
});
