let started=false;
let level=0;
let btnColors=["yellow","red","green","purple"];
let sysSeq=[];
let userSeq=[];
document.addEventListener("keypress",function() {
    if(started==false){
        
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash-btn");
    setTimeout(function() {
        btn.classList.remove("flash-btn")
    },250);
}


let h2=document.querySelector('h2');
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btnColors[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    sysSeq.push(randColor);
    btnFlash(randBtn);
}


function checkAnswer(idx){
    if(userSeq[idx]== sysSeq[idx]){
        if(userSeq.length==sysSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score is <b></b>${level}</b> <br> Press any key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },150)
        resetGame();
    }
}
function keyPress(){
    let btn = this;
    btnFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAnswer(userSeq.length-1);
}

let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",keyPress);
}


function resetGame(){
    started=false;
    level=0;
    sysSeq=[];
    userSeq=[];
}