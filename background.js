chrome.storage.onChanged.addListener(function(changes) {
  chrome.storage.sync.get(['mode'], function(result){
    if(result.mode == '0') {
      replaceText(tab.id);}
    if (result.mode =="1"){
      replaceTextOff(tab.id);}
  });
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
    files: ['main off.js'],
  });
}