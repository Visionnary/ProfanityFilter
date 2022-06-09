var profanity=                                                                                                                                                                                                                                                                                    ["2g1c","2 girls 1 cup","acrotomophilia","anal","anilingus","anus","arsehole","ass","asshole","assmunch","auto erotic","autoerotic","babeland","baby batter","ball gag","ball gravy","ball kicking","ball licking","ball sack","ball sucking","bangbros","bareback","barely legal","barenaked","bastardo","bastinado","bbw","bdsm","beaver cleaver","beaver lips","bestiality","bi curious","big breasts","big knockers","big tits","bimbos","birdlock","bitch","black cock","blonde action","blonde on blonde action","blow j","blow your l","blue waffle","blumpkin","bollocks","bondage","boner","boob","boobs","booty call","brown showers","brunette action","bulldyke","bullet vibe","bung hole","bunghole","busty","butt","buttcheeks","butthole","camel toe","camslut","camwhore","carpet muncher","carpetmuncher","chocolate rosebuds","circlejerk","cleveland steamer","clit","clitoris","clover clamps","clusterfuck","cock","cocks","coprolagnia","coprophilia","cornhole","cum","cumming","cunnilingus","cunt","darkie","date rape","daterape","deep throat","deepthroat","dick","dildo","dirty pillows","dirty sanchez","doggie style","doggiestyle","doggy style","doggystyle","dolcett","domination","dominatrix","donkey punch","double dong","double penetration","dp action","eat my ass","ejaculation","erotic","erotism","escort","ethical slut","eunuch","faggot","fecal","felch","fellatio","feltch","female squirting","femdom","figging","fingering","fisting","foot fetish","footjob","frotting","fuck","fuck buttons","fudge packer","fudgepacker","futanari","g-spot","gang bang","gay sex","genitals","giant cock","girl on","girl on top","girls gone wild","goatcx","goatse","gokkun","golden shower","goo girl","goodpoop","goregasm","grope","group sex","guro","hand job","handjob","hard core","hardcore","hentai","homoerotic","honkey","hooker","hot chick","how to kill","how to murder","huge fat","humping","incest","intercourse","jack off","jail bait","jailbait","jerk off","jigaboo",
                                                                                                                                                                                                                                                                                                          "jiggaboo","jiggerboo","jizz","juggs","kike","kinbaku","kinkster","kinky","knobbing","leather restraint","leather straight jacket","lemon party","lolita","lovemaking","make me come","male squirting","masturbate","menage a trois","milf","missionary position","motherfucker","mound of venus",
                                                                                                                                                                                                                                                                                                          "mr hands","muff diver","muffdiving","nambla","nawashi","negro","neonazi","nig nog","nigga","nigger","nimphomania","nipple","nipples","nsfw images","nude","nudity","nympho","nymphomania","octopussy","omorashi","one cup two girls","one guy one jar","orgasm","orgy","paedophile","panties",
                                                                                                                                                                                                                                                                                                          "panty","pedobear","pedophile","pegging","penis","phone sex","piece of shit","piss pig","pissing","pisspig","playboy","pleasure chest","pole smoker","ponyplay","poof","poop chute","poopchute","porn","porno","pornography","prince albert piercing","pthc","pubes","pussy","queef",
                                                                                                                                                                                                                                                                                                      "raghead","raging boner","rape","raping","rapist","rectum","reverse cowgirl","rimjob","rimming","rosy palm","rosy palm and her 5 sisters","rusty trombone","s&m","scat","schlong","scissoring","semen","sex","sexo","sexy","shaved beaver","shaved pussy","shemale","shibari","shit",
                                                                                                                                                                                                                                                                                                        "shota","shrimping","slanteye","slut","smut","snatch","snowballing","sodomize","sodomy","spic","spooge","spread legs","strap on","strapon","strappado","strip club","style doggy","suicide girls","sultry women","swastika","swinger","tainted love","taste my","tea bagging",
                                                                                                                                                                                                                                                                                                            "threesome","throating","tied up","tight white","tit","tits","titties","titty","tongue in a","topless","tosser","towelhead","tranny","tribadism","tub girl","tubgirl","tushy","twat","twink","twinkie","two girls one cup","undressing","upskirt","urethra play","urophilia","vagina","venus mound",
                                                                                                                                                                                                                                                                                                                        "vibrator","violet wand","vorarephilia","voyeur","wank","wet dream","wetback","white power","wrapping men","wrinkled starfish","xx","xxx","yaoi","yellow showers","yiffy","zoophilia","to"]

function replaceText(replacements, mode) {
  console.log(mode);
  if (mode=="0"){
    console.log("Filter is Off");
    return;
  }
  else{
    let node;
    const nodeIterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
    while (node = nodeIterator.nextNode()) {
      for (let x of replacements) {
          node.nodeValue = node.nodeValue.replace(" "+x+" ", " "+lengthCounter(x.length)+' ');
        }
    }  
  }    
}

function lengthCounter(length){
  let word='';
  for (let x=0;x<length; x++){
    word+="*";
  }
  return word;
}


chrome.storage.sync.get(['mode'], function(data) {
  replaceText(profanity,data.mode);
});


