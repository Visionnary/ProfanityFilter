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