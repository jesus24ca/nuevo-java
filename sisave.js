const player = document.getElementById("player");
const captus = document.getElementById("captus");
const background = document.getElementById("background");
const buttonPlaystop = document.getElementById
("buttonPlaystop");
let scoreInterval;
let score =0;
document.addEventListener("click", function(){
    player.classList.add("playerjump");

})
player.addEventListener("animationend", () =>{
    player.classList.remove("playerjump");
});

function pauseAnimation(){
    captus.style.animationPlayState = 'paused';
    player.style.animationPlayState = 'paused';
    background.style.animationPlayState = 'paused';
}



function pauseGame(){
    pauseAnimation();
    stopScore();
   
    
}
function resumeScore(){
    scoreInterval = setInterval(()=>{
        score++;
        document.getElementById('score').innerText = score;
    }, 1000)

}

function stopScore(){
    clearInterval(scoreInterval);
}
function resumeGame(){
    captus.style.animationPlayState = 'running';
    player.style.animationPlayState = 'running';
    background.style.animationPlayState = 'running';
    resumeScore();
}


buttonPlaystop.addEventListener('click', () =>{   
    if( buttonType = buttonPlaystop.classList.contains('play')){
        //reanudo el juego 
        resumeGame();
    }else{
        pauseGame();
    };
    buttonPlaystop.classList.toggle('play');
    //si es un boton de play continuara el juego
    //si es un boton de pausa el juego
})





 

