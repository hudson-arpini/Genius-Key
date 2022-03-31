let getKeyCode = (event) => {
    let keyCode
    if(event.type === "keydown"){keyCode = event.keyCode}
    else {keyCode = event.target.dataset.key}
    return keyCode
}

let audio = (keyCode) => {
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

let addplayingClass = (key) => {
    key.classList.add ("playing")
}

let play = (event) => {
    let keyCode = getKeyCode(event)
    let key = document.querySelector(`[data-key="${keyCode}"]`)
    if(!key){return}
    audio(keyCode)
    addplayingClass(key)
}

let removePlayingClass = (event) => {
    event.target.classList.remove('playing')
}



const keys = document.querySelectorAll(".key")

keys.forEach((key) => {
    key.addEventListener("click", play)
    key.addEventListener("transitionend",removePlayingClass)
})

window.addEventListener("keydown", play)
