let gameSeq=[];
let userSeq=[];

let btns=["yellow", "red", "purple", "green" ];

let started=false;
let level=0;

let h2=document.querySelector("h2")

const audio = document.getElementById("gameMusic");
const gameOverAudio = document.getElementById("gameOver");

document.addEventListener("keypress", function(){

    audio.play();
    if (started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
} 
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
} 

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`; 

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").classList.add("game-over"); // Add game-over class
        audio.pause();
        gameOverAudio.play();
        setTimeout(function() {
            document.querySelector("body").classList.remove("game-over"); // Remove game-over class
        }, 150);
        reset();
    }
}


function btnPress (){
    let btn=this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
    
for (btn of allBtns){
        btn.addEventListener("click", btnPress);
    }

  function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
  }
// Reference to the audio element and mute button icon
const muteButton = document.getElementById("muteButton");
const icon = muteButton.querySelector("i");

// Set up the mute/unmute toggle functionality
muteButton.addEventListener("click", () => {
    if (audio.muted) {
        audio.muted = false;
        icon.classList.replace("fa-volume-xmark", "fa-volume-high");
    } else {
        audio.muted = true;
        icon.classList.replace("fa-volume-high", "fa-volume-xmark");
    }
});
// References to elements
const howToPlayButton = document.getElementById("howToPlayButton");
const howToPlayOverlay = document.getElementById("howToPlayOverlay");
const closeButton = document.getElementById("closeButton");

// Show overlay on "How to Play" button click
howToPlayButton.addEventListener("click", () => {
    howToPlayOverlay.style.display = "flex";
});

// Hide overlay on "Close" button click
closeButton.addEventListener("click", () => {
    howToPlayOverlay.style.display = "none";
});


