
document.getElementById('all').addEventListener('click',function(){
  alert("changed");
  console.log("click");
  chrome.storage.sync.set({mode:"1"}, function(){
    console.log("set on");
  });
});
  
document.getElementById('off').addEventListener('click',function(){
  alert("changed");
  console.log("click");
  chrome.storage.sync.set({mode:"0"}, function(){
    console.log("set off");
  });
});


