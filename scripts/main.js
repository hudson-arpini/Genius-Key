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

let removePlayingClass = (event) => {
  event.target.classList.remove('playing')
}

let play = (event) => {
    let keyCode = getKeyCode(event)
    let key = document.querySelector(`[data-key="${keyCode}"]`)
    if(!key){return}
    audio(keyCode)
    addplayingClass(key)
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
  if (telaPrincipal.style.display === "none") {telaPrincipal.style.display = "flex"} 
  else {telaPrincipal.style.display = "none"}
    piano.classList.toggle("none")
    voltar.classList.toggle("none")
    start.classList.toggle("none")
    dificuldade = 5
})

medio.addEventListener("click", ()=>{
  if (telaPrincipal.style.display === "none") {telaPrincipal.style.display = "flex"}
  else {telaPrincipal.style.display = "none"}
    piano.classList.toggle("none")
    voltar.classList.toggle("none")
    start.classList.toggle("none")
    dificuldade = 7
})

dificil.addEventListener("click", ()=>{
  if (telaPrincipal.style.display === "none") {telaPrincipal.style.display = "flex"}
  else {telaPrincipal.style.display = "none"}
    piano.classList.toggle("none")
    voltar.classList.toggle("none")
    start.classList.toggle("none")
    dificuldade = 9
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

start.addEventListener("click",()=>{
    genius(dificuldade)
})

  //FUNÇÕES DO GENIUS

  
  let genius = (dificuldade) => {
    numTeclas = []
    //CRIANDO UM ARRAY COM OS KEYCODES
    keys.forEach((key) => {
      numTeclas.push(key.dataset.key)
    })
    //EMBARALHANDO O ARRAY COM FISHER-YATES
    for (let i = numTeclas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numTeclas[i], numTeclas[j]] = [numTeclas[j], numTeclas[i]];
    }
    //DEFININDO O TAMANHO DO ARRAY DE ACORDO COM A DIFICULDADE
    let sequencia = numTeclas.slice(0,dificuldade)
    //TOCANDO AS NOTAS DA SEQUENCIA
    let k=0
    let id = setInterval(()=>{
        audio(sequencia[k])
        document.querySelector(`[data-key="${sequencia[k]}"]`).classList.add ("playing")
        k++
        if(k === dificuldade){clearInterval(id)}
      },1500)
  }

  