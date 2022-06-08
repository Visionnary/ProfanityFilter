/*chrome.storage.onChanged.addListener(function(changes) {
  alert("changed");
  var action = changes['mode'];
  if(action.newValue == '0') {
    alert("yes");
    replaceText(tab.id);}
  if (action.newValue=="1"){
    alert("no");
    replaceTextOff(tab.id);
  }
});

function replaceText(tabId) {
  chrome.scripting.executeScript({
    target: {tabId},
    files: ['main.js'],
  });
}

function replaceTextOff(tabId) {
  chrome.scripting.executeScript({
    target: {tabId},
    files: ['mainoff.js'],
  });
}*/
chrome.commands.onCommand.addListener((command, tab) => {
  if (command == 'Filter text') {
    replaceText(tab.id);
  }
});

chrome.runtime.onInstalled.addListener(() => {
  registerContextMenus();
});

function registerContextMenus() {
  chrome.contextMenus.create({
    id: 'filter-text-menuitem',
    title: 'Replace text',
  });
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == 'filter-text-menuitem') {
    replaceText(tab.id);
  }
});

function replaceText(tabId) {
  chrome.scripting.executeScript({
    target: {tabId},
    files: ['main.js'],
  });
}