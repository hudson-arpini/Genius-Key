//FUNÇÕES DO PIANO 

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

//DOM DO PIANO

const keys = document.querySelectorAll(".key")

keys.forEach((key) => {
    key.addEventListener("click", play)
    key.addEventListener("transitionend",removePlayingClass)
})

window.addEventListener("keydown", play)

//DOM DAS TELAS

let telaPrincipal = document.querySelector("#main-screen")
let piano = document.querySelector("#piano")

let facil = document.querySelector("#facil")
let medio = document.querySelector("#medio")
let dificil = document.querySelector("#dificil")
let livre = document.querySelector("#livre")
let voltar = document.querySelector("#voltar")
let start = document.querySelector("#start")

facil.addEventListener("click", ()=>{
  if (telaPrincipal.style.display === "none") {telaPrincipal.style.display = "flexflex"} 
  else {telaPrincipal.style.display = "none"}
    piano.classList.toggle("none")
    voltar.classList.toggle("none")
    start.classList.toggle("none")
})

medio.addEventListener("click", ()=>{
  if (telaPrincipal.style.display === "none") {telaPrincipal.style.display = "flex"}
  else {telaPrincipal.style.display = "none"}
    piano.classList.toggle("none")
    voltar.classList.toggle("none")
    start.classList.toggle("none")
})

dificil.addEventListener("click", ()=>{
  if (telaPrincipal.style.display === "none") {telaPrincipal.style.display = "flex"}
  else {telaPrincipal.style.display = "none"}
    piano.classList.toggle("none")
    voltar.classList.toggle("none")
    start.classList.toggle("none")
})

livre.addEventListener("click", ()=>{
  if (telaPrincipal.style.display === "none") {telaPrincipal.style.display = "flex"}
  else {telaPrincipal.style.display = "none";}
    piano.classList.toggle("none")
    voltar.classList.toggle("none")
})

voltar.addEventListener("click", ()=>{
    if (telaPrincipal.style.display === "none") {telaPrincipal.style.display = "flex"}
    else {telaPrincipal.style.display = "none";}
      piano.classList.toggle("none")
      voltar.classList.toggle("none")
      start.classList.add("none")
  })