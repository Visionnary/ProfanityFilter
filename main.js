function firstlast(word){
    var filter = new Array();
    var txtfile= "words.txt";
    var file = new File(txtfile);
    while (!file.eof){
        filter.push(file.readIn());
    }
    document.write(filter);
    for (let i=0; i<filter.length(); i++){
          if (word == list[i]){
              word=list[0];
              for (let x=0; x<list[x].length()-1; x++){
                  word+="*";
              }
            word+=list[-1];
          }  
    }
    document.write(word);
}

document.write(firstlast("net"));