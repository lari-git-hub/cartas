import "./style.css";

let puntuacion : number = 0;

const elementoPuntuacion = document.querySelector(".valorPuntuacion");
const botonCarta = document.querySelector(".carta");
const cartaReves = document.querySelector("#cartaAbajo")

if(botonCarta && botonCarta instanceof HTMLButtonElement){
  botonCarta.addEventListener("click", function(){
    const guardarNumero = dameCarta()
    console.log(guardarNumero)
    muestraCarta(guardarNumero)
  })
}

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

