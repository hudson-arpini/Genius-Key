//FUNÇÕES DO PIANO -----------------------------------------------------------------------------------------------------------------


//PEGAR KEYCODE COM EVENTO DE KEYDOWN OU CLICK
let getKeyCode = (event) => {
    let keyCode
    if(event.type === "keydown"){keyCode = event.keyCode}
    else {keyCode = event.target.dataset.key}
    return keyCode
}

//TOCAR O AUDIO REFERENTE AO KEYCODE
let audio = (keyCode) => {
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

//ADICIONAR EFEITOS DE CSS
let addplayingClass = (key) => {
    key.classList.add ("playing")
}

//REMOVER EFEITOS DE CSS
let removePlayingClass = (event) => {
  event.target.classList.remove('playing')
}

//FUNÇÃO PRINCIPAL: DISPARAR TODOS OS GATILHOS QUANDO UMA TECLA É ATIVADA
let jogador = []
let available = false
let play = (event) => {
  //PEGANDO O KEY CODE
    let keyCode = getKeyCode(event)
    let key = document.querySelector(`[data-key="${keyCode}"]`)
    if(!key){return}
    //TOCANDO E ADICIONANDO EFEITOS NA TECLA
    audio(keyCode)
    addplayingClass(key)
    //TESTES DE VITÓRIA OU DERROTA DO GENIUS
    if(available){
      jogador.push(keyCode)
      console.log(jogador)
      if(jogador.length === sequencia.length){
        if(JSON.stringify(jogador) === JSON.stringify(sequencia)) {
          vitoria.classList.toggle("none") 
          valendo.classList.add("none")}
        else{
          derrota.classList.toggle("none") 
          valendo.classList.add("none")}
        jogador = []
    }
  }
  }


//DOM DO PIANO--------------------------------------------------------------------------------------------------------------------------------

const keys = document.querySelectorAll(".key")

keys.forEach((key) => {
    key.addEventListener("click", play)
    key.addEventListener("transitionend",removePlayingClass)
})

window.addEventListener("keydown", play)

//DOM DAS TELAS---------------------------------------------------------------------------------------------------------------------------------

let telaPrincipal = document.querySelector("#main-screen")
let piano = document.querySelector("#piano")

// BOTÕES DA TELA PRINCIPAL

let facil = document.querySelector("#facil")
let medio = document.querySelector("#medio")
let dificil = document.querySelector("#dificil")
let livre = document.querySelector("#livre")

//BOTÕES DAS TELAS DE JOGO

let voltar = document.querySelector("#voltar")
let start = document.querySelector("#start")
let valendo = document.querySelector("#valendo")

//TELAS DE RESULTADO

let vitoria = document.querySelector("#vitoria")
let derrota = document.querySelector("#derrota")

//BOTÕES DAS TELAS DE RESULTADO
let voltarVitoria = document.querySelector("#voltarVitoria")
let voltarDerrota = document.querySelector("#voltarDerrota")
let jogarVitoria = document.querySelector("#jogarVitoria")
let jogarDerrota = document.querySelector("#jogarDerrota")

//EVENT LISTENERS------------------------------------------------------------------------------------------------------------------------

//BOTÕES DO MENU

facil.addEventListener("click", ()=>{
  jogador=[]
  sequencia=[]
  available=false
  telaPrincipal.style.display = "none"
    piano.classList.toggle("none")
    voltar.classList.toggle("none")
    start.classList.toggle("none")
    dificuldade = 5
})

medio.addEventListener("click", ()=>{
  jogador=[]
  sequencia=[]
  available=false
  telaPrincipal.style.display = "none"
    piano.classList.toggle("none")
    voltar.classList.toggle("none")
    start.classList.toggle("none")
    dificuldade = 7
})

dificil.addEventListener("click", ()=>{
  jogador=[]
  sequencia=[]
  available=false
  telaPrincipal.style.display = "none"
  piano.classList.toggle("none")
  voltar.classList.toggle("none")
  start.classList.toggle("none")
  dificuldade = 9
})

livre.addEventListener("click", ()=>{
  jogador=[]
  sequencia=[]
  available=false
  telaPrincipal.style.display = "none"
  piano.classList.toggle("none")
  voltar.classList.toggle("none")
})

//BOTÕES DA TELA DO PIANO

voltar.addEventListener("click", ()=>{
    if (telaPrincipal.style.display === "none") {telaPrincipal.style.display = "flex"}
    else {telaPrincipal.style.display = "none";}
      piano.classList.add("none")
      voltar.classList.add("none")
      start.classList.add("none")
      derrota.classList.add("none")
      vitoria.classList.add("none")
      valendo.classList.add("none")
  })

start.addEventListener("click",()=>{
    available=false
    genius(dificuldade)
    voltar.classList.add("none")
    start.classList.add("none")
    valendo.classList.add("none")
    setTimeout (()=>{
      available=true
      if (telaPrincipal.style.display === "none"){
        valendo.classList.remove("none")
        voltar.classList.remove("none")
        start.classList.remove("none")
      }
    },dificuldade*1700)
  })

  //BOTÕES DE TELA DE RESULTADO

voltarVitoria.addEventListener("click", ()=>{
    if (telaPrincipal.style.display === "none") {telaPrincipal.style.display = "flex"}
    else {telaPrincipal.style.display = "none";}
      piano.classList.add("none")
      voltar.classList.add("none")
      start.classList.add("none")
      derrota.classList.add("none")
      vitoria.classList.add("none")
      valendo.classList.add("none")
  })

jogarVitoria.addEventListener("click",()=>{
    available=false
    genius(dificuldade)
    voltar.classList.add("none")
    start.classList.add("none")
    vitoria.classList.add("none")
    setTimeout (()=>{
      available=true
      if (telaPrincipal.style.display === "none"){
        valendo.classList.remove("none")
        voltar.classList.remove("none")
        start.classList.remove("none")
      }
    },dificuldade*1700)
  })

voltarDerrota.addEventListener("click", ()=>{
    if (telaPrincipal.style.display === "none") {telaPrincipal.style.display = "flex"}
    else {telaPrincipal.style.display = "none";}
      piano.classList.toggle("none")
      voltar.classList.toggle("none")
      start.classList.add("none")
      derrota.classList.add("none")
      vitoria.classList.add("none")
      valendo.classList.add("none")
  })

jogarDerrota.addEventListener("click",()=>{
    available=false
    genius(dificuldade)
    voltar.classList.add("none")
    start.classList.add("none")
    derrota.classList.add("none")
    setTimeout (()=>{
      available=true
      if (telaPrincipal.style.display === "none"){
        valendo.classList.remove("none")
        voltar.classList.remove("none")
        start.classList.remove("none")
      }
    },dificuldade*1700)
  })

  //FUNÇÕES DO GENIUS

  let sequencia = []
  let genius = (dificuldade) => {
    numTeclas = []
    jogador = []
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
    sequencia = numTeclas.slice(0,dificuldade)
    //TOCANDO AS NOTAS DA SEQUENCIA
    let k=0
    let id = setInterval(()=>{
      audio(sequencia[k])
      document.querySelector(`[data-key="${sequencia[k]}"]`).classList.add ("playing")
      k++
      if(k === dificuldade){clearInterval(id)}
      //PARANDO DE TOCAR QUANDO VOLTAR AO MENU
      if(piano.classList.contains("none")){
        document.querySelectorAll("audio").forEach( elem => elem.pause())
        keys.forEach((key) => {key.classList.remove("playing")})
      }
    },1500)
    
  }
  
