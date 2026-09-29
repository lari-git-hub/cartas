import "./style.css";

let puntuacion : number = 0;
let resultadoFinal = false;

const elementoPuntuacion = document.querySelector(".valorPuntuacion");
const botonCarta = document.querySelector(".carta");
const cartaReves = document.querySelector("#cartaAbajo")
const mensaje = document.querySelector(".mensaje")
const plantarseBoton = document.querySelector(".plantarse")
const nuevaPartidaBoton = document.querySelector(".nuevaPartida")
const quePasariaBoton = document.querySelector(".quePasaria")


if(botonCarta && botonCarta instanceof HTMLButtonElement){
  botonCarta.addEventListener("click", function(){

    if(resultadoFinal === false){
    const guardarNumero = dameCarta()
    console.log(guardarNumero)
    muestraCarta(guardarNumero)
    
    if(guardarNumero === 10 || guardarNumero === 11 || guardarNumero === 12 ){
      puntuacion = puntuacion + 0.5
    }else{
      puntuacion = puntuacion + guardarNumero
    }
    muestraPuntuacion()

    if(puntuacion > 7.5){
      resultadoFinal = true
      if(mensaje){
      mensaje.textContent = "Game over"
    }
    } 
    
  }})

}

if(plantarseBoton && plantarseBoton instanceof HTMLButtonElement){
  plantarseBoton.addEventListener("click", function(){
    resultadoFinal = true

    if(puntuacion < 4){
      if(mensaje){
        mensaje.textContent = "Has sido muy conservador."
      }
    }
    if(puntuacion === 5){
      if(mensaje){
        mensaje.textContent = "Te ha entrado el canguelo eh?."
      }
    }
    if(puntuacion === 6 || puntuacion === 7){
      if(mensaje){
        mensaje.textContent = "Casi casi..."
      }
    }
    if(puntuacion === 7.5){
      if(mensaje){
        mensaje.textContent = "¡ Lo has clavado! ¡Enhorabuena!"
      }
    }
  })
}

if(nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement){
  nuevaPartidaBoton.addEventListener("click", function(){
    puntuacion = 0
    resultadoFinal = false
    muestraPuntuacion()
    if(cartaReves && cartaReves instanceof HTMLImageElement){
      cartaReves.src = "/imagenes/back.jpg"
    }
    if(mensaje){
      mensaje.textContent = ""
    }
  })
  
}

if(quePasariaBoton && quePasariaBoton instanceof HTMLButtonElement){
  quePasariaBoton.addEventListener("click", function(){
    if(resultadoFinal=== true){
      let cartaQuePasaria = dameCarta()
      let puntuacionHipotetica = puntuacion

      if(cartaQuePasaria === 10 || cartaQuePasaria === 11 || cartaQuePasaria === 12 ){
        puntuacionHipotetica = puntuacionHipotetica + 0.5
      }else{
        puntuacionHipotetica = puntuacionHipotetica + cartaQuePasaria
      }
      if(puntuacionHipotetica > 7.5){
        if(mensaje){
          mensaje.textContent = "Habrías perdido " + puntuacionHipotetica + " puntos"
        }
        }else{
          if(mensaje){
            mensaje.textContent = "No habrías perdido, hubieras tenido " + puntuacionHipotetica + " puntos."
      }
      
    }
    }
    
    
    }
  )}

function muestraCarta (carta : number) : void {

  if(cartaReves && cartaReves instanceof HTMLImageElement){
     switch(carta){
      case 1: 
        cartaReves.src = "/imagenes/1_as-copas.jpg"
      break;
      case 2:
        cartaReves.src = "/imagenes/2_dos-copas.jpg"
      break;
      case 3:
        cartaReves.src = "/imagenes/3_tres-copas.jpg"
      break;
      case 4:
        cartaReves.src = "/imagenes/4_cuatro-copas.jpg"
      break;
      case 5:
        cartaReves.src = "/imagenes/5_cinco-copas.jpg"
      break;
      case 6:
        cartaReves.src = "/imagenes/6_seis-copas.jpg"
      break;
      case 7:
        cartaReves.src = "/imagenes/7_siete-copas.jpg"
      break;
      case 10:
        cartaReves.src = "/imagenes/10_diez-copas.jpg"
      break;
      case 11:
        cartaReves.src = "/imagenes/11_once-copas.jpg"
      break;
      case 12:
        cartaReves.src = "/imagenes/12_doce-copas.jpg"
      break;
  }

  
  console.log(cartaReves.src);
}
}


function muestraPuntuacion() {
  
  if(elementoPuntuacion){
    elementoPuntuacion.textContent = puntuacion.toString();
  }
}
muestraPuntuacion();

function dameCarta() : number {
  
  let resultadoCarta = Math.floor(Math.random() * 10) + 1;

  if(resultadoCarta > 7){
    resultadoCarta = resultadoCarta +2
  }

  return resultadoCarta;
}

