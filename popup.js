async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}



document.getElementById('all').addEventListener('click',function(){
  alert("on");
  console.log("click");
  let current = await getCurrentTab()
  chrome.storage.sync.set({mode:"1"}, function(){
    console.log("set on");
    chrome.scripting.executeScript({
      target: {tabId: current.id},
      files: ['main.js'],
    });
  alert("set on");
  });
});
  
document.getElementById('off').addEventListener('click',function(){
  console.log("click");
  let current = await getCurrentTab()
  chrome.storage.sync.set({mode:"0"}, function(){
    console.log("set off");
    chrome.scripting.executeScript({
      target: {tabId: current.id},
      files: ['main.js'],
    });
  alert("set off");
  });
});


