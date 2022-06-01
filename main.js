function firstlast(word){
    const fs = require('fs');
    var filter = [];
    var xhr = new XMLHttpRequest();
    xhr.open('GET', chrome.runtime.getURL('words.txt'), true);
    for (i in xhr.responseText){
        filter.push(xhr.responseText[i]);
    }
    console.log(filter);
    for (let i=0; i<filter.length; i++)
    {
        if (word.toLowerCase() == filter[i])
        {
            word=filter[i][0];
            for (let x=0; x<filter[i].length-1; x++){
                word+="*";
            }
            word+=filter[i][filter[i].length-1];
        }  
    }
    return word;
}
//document.write("hi");
x=firstlast("woman");
document.write(x);
