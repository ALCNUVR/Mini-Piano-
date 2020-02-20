window.addEventListener("keydown",playSoundWithKeyboard);

function playSoundWithKeyboard(e){
    const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key  = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;   
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("click",playSoundWithClick);
    key.addEventListener("transitionend",removeTransition);
});

function playSoundWithClick(e){
    const key = document.querySelectorAll(".key");
    const audio = document.querySelectorAll(".audio");
    let clickIndex = Array.from(key).indexOf(e.target);
    audio[clickIndex].currentTime=0;
    audio[clickIndex].play();
    key[clickIndex].classList.add("playing");
}

function removeTransition(e){
    if(e.propertyName !=="transform") return;
    this.classList.remove("playing")
}


