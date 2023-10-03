let lettercontainer =document.querySelector(".letters");
let category= document.querySelector(".category span")
let guessContainer =document.querySelector(".letters-guess")
let letters="abcdefghijklmnospqurtwxvyz"
let lettterArray= Array.from(letters);
lettterArray.forEach((letter)=>{
    let spanleter = document.createElement("span");
    spanleter.classList.add("letter-box")
    let spantxt= document.createTextNode(letter);
    spanleter.append(spantxt)
    lettercontainer.append(spanleter)
})
const words={
    programming:["html","css","javascripte","php","python","node.js","typescript","larval"],
    movies:["coco","up","avengers","intersteller","assine cred","black panther","forginer"],
    people:["ahmed zewil","magdy yacoup","albert einshtine"],
    counteries:["egypt","syria","plestine","qatar","truky","amrican united stast"]
}
let allkeys = Object.keys(words)
let randompropnum=Math.floor(Math.random()*allkeys.length);
let randompropName=allkeys[randompropnum];
category.innerHTML=randompropName;
let randompropValue=words[randompropName]
let randomwordnum=Math.floor(Math.random()*randompropValue.length)
let randomValueValue=randompropValue[randomwordnum]
console.log(randomValueValue);
let wordarray= Array.from(randomValueValue);
wordarray.forEach((letter)=>{
    emptySpan=document.createElement("span");
    
    guessContainer.append(emptySpan);
    emptySpan.classList.add("guess-letter");
    if(letter===" "){
        emptySpan.classList.add("with-space");
    }
})



spansArray=document.querySelectorAll(".letters-guess span")
let wrongAttemps=0
let thedraw=document.querySelector(".hangman-draw")
document.addEventListener("click",(e)=>{
    let statusfor=false;
    if(e.target.classList.contains("letter-box")){ 
    e.target.classList.add("clicked");

    
    let clickedelement=e.target.innerHTML;
 let arrayOfLetters=Array.from(randomValueValue);

    arrayOfLetters.forEach((letter,index)=>{
        if(clickedelement ==letter){
            statusfor =true;
        
        spansArray.forEach((span,indexspan)=>{
            if(indexspan===index){
                span.innerHTML=clickedelement;
            }
        })

    }


    
})
// ouside loop
if(statusfor!==true){
    wrongAttemps++;
    thedraw.classList.add(`wrong-${wrongAttemps}`);
}
if(wrongAttemps===8){
    endgame()
}

}

});
function endgame(){
    lettercontainer.classList.add("clicked")
    let div=document.createElement("div");
    div.classList.add("popup")
    let divtext=document.createTextNode("GAME OVER");
    div.append(divtext);
    document.body.append(div);
}
function nextword(){
    
}
let nxt=document.querySelector("button");
nxt.onclick=function(){
    console.log("right")
    wrongAttemps=0;
category.innerHTML=" ";
guessContainer.innerHTML=" "
category.innerHTML=randompropName;
wordarray.forEach((letter)=>{
    emptySpan=document.createElement("span");
    
    guessContainer.append(emptySpan);
    emptySpan.classList.add("guess-letter");
    if(letter===" "){
        emptySpan.classList.add("with-space");
    }
})



}