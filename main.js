function firstlast(word){
    const fs = require('fs');
    var filter = [];
    var content = fs.readFileSync("./words.txt").toString().split("\n");
    for (i in content){
        filter.push(content[i]);
    }
    console.log(filter);
    for (let i=0; i<filter.length; i++){
          if (word.toLowerCase == filter[i]){
              word=filter[i][0];
              for (let x=0; x<filter[i].length-1; x++){
                  word+="*";
              }
            word+=filter[i][filter[i].length];
          }  
          console.log(i);
    }
    return word;
}
console.log(firstlast("woman"));