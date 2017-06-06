/**
 * Created by sean.j.greene on 6/1/2017.
 */

var timer;

function openArrowMenu() {
  console.log("Getting Current Tab Info");
  browser.tabs.query({currentWindow: true, active: true}, function(tabs) {
    console.log(tabs[0]);

    browser.tabs.reload();
  });
}

function callCustomPrompt() {
  var popupURL = browser.extension.getURL("popup/popup.html");

  var creating = browser.windows.create({
    url: popupURL,
    type: "popup",
    height: 200,
    width: 200
  });
  creating.then(onCreated, onError);
}

function menuClick(info, tab) {
  var menuClicked = info.menuItemId;

  switch (menuClicked) {
    case "tenSecondMenuItem":
      timer = 10000;
      break;
    case "thirtySecondMenuItem":
      timer = 30000;
      break;
    case "oneMinuteMenuItem":
      timer = 60000;
      break;
    case "threeMinuteMenuItem":
      timer = 180000;
      break;
    case "fiveMinuteMenuItem":
      timer = 320000;
      break;
    case "tenMinuteMenuItem":
      timer = 640000;
      break;
    case "fifteenMinuteMenuItem":
      timer = 900000;
      break;
    case "twentyMinuteMenuItem":
      timer = 1200000;
      break;
    case "customTimeMenuItem":
      timer = 0;
      callCustomPrompt();
      break;
    default:
      break;
  }
}

function onCreated() {
  if(browser.runtime.lastError) {
    console.log("Error creating item: ", browser.runtime.lastError);
  } else {
    console.log("Item created successfully");
  }
}

browser.contextMenus.create({
  id: "tenSecondMenuItem",
  type: "radio",
  title: "10 sec",
  contexts: ["all"],
  checked: false,
}, onCreated);

browser.contextMenus.create({
  id: "thirtySecondMenuItem",
  type: "radio",
  title: "30 sec",
  contexts: ["all"],
  checked: false,
}, onCreated);

browser.contextMenus.create({
  id: "oneMinuteMenuItem",
  type: "radio",
  title: "1 min",
  contexts: ["all"],
  checked: false,
}, onCreated);

browser.contextMenus.create({
  id: "threeMinuteMenuItem",
  type: "radio",
  title: "3 min",
  contexts: ["all"],
  checked: false,
}, onCreated);

browser.contextMenus.create({
  id: "fiveMinuteMenuItem",
  type: "radio",
  title: "5 min",
  contexts: ["all"],
  checked: false,
}, onCreated);

browser.contextMenus.create({
  id: "tenMinuteMenuItem",
  type: "radio",
  title: "10 min",
  contexts: ["all"],
  checked: false,
}, onCreated);

browser.contextMenus.create({
  id: "fifteenMinuteMenuItem",
  type: "radio",
  title: "15 min",
  contexts: ["all"],
  checked: false,
}, onCreated);

browser.contextMenus.create({
  id: "twentyMinuteMenuItem",
  type: "radio",
  title: "20 min",
  contexts: ["all"],
  checked: false,
}, onCreated);

browser.contextMenus.create({
  id: "customTimeMenuItem",
  type: "radio",
  title: "User defined",
  contexts: ["all"],
  checked: true,
}, onCreated);

browser.browserAction.onClicked.addListener(openArrowMenu);
browser.contextMenus.onClicked.addListener(menuClick);