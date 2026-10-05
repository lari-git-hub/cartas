import "./style.css";

let puntuacion: number = 0;

// ELEMENTOS DEL HTML

const elementoPuntuacion = document.querySelector(".valorPuntuacion");
const botonCarta = document.querySelector(".carta");
const cartaReves = document.querySelector("#cartaAbajo");
const mensaje = document.querySelector(".mensaje");
const plantarseBoton = document.querySelector(".plantarse");
const nuevaPartidaBoton = document.querySelector(".nuevaPartida");
const quePasariaBoton = document.querySelector(".quePasaria");


// PEDIR CARTA

if (botonCarta && botonCarta instanceof HTMLButtonElement) {

  botonCarta.addEventListener("click", function () {
    pedirCarta();
  });

}

const pedirCarta = () => {

  const numeroAleatorio = dameNumeroAleatorio();
  const carta = obtenerNumeroCarta(numeroAleatorio);

  const urlCarta = obtenerUrlCarta(carta);
  muestraCarta(urlCarta);

  const puntosCarta = obtenerPuntos(carta);
  puntuacion = sumarPuntos(puntosCarta);

  muestraPuntuacion();
  comprobarPartida();
};

// GENERAR NÚMERO ALEATORIO

const dameNumeroAleatorio = () => {

  return Math.floor(Math.random() * 10) + 1;

};

// OBTENER NÚMERO DE CARTA

const obtenerNumeroCarta = (numeroAleatorio: number) => {

  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }

  return numeroAleatorio;
};

// OBTENER PUNTOS DE LA CARTA

const obtenerPuntos = (carta: number) => {

  if (carta > 7) {
    return 0.5;
  }

  return carta;
};

// SUMAR PUNTOS

const sumarPuntos = (nuevosPuntos: number) => {

  return puntuacion + nuevosPuntos;
};

// MOSTRAR PUNTUACIÓN

function muestraPuntuacion(): void {

  if (elementoPuntuacion) {
    elementoPuntuacion.textContent = puntuacion.toString();
  }
}

// MOSTRAR CARTA

function obtenerUrlCarta(carta: number): string {

  switch (carta) {

    case 1:
      return "/imagenes/1_as-copas.jpg";

    case 2:
      return "/imagenes/2_dos-copas.jpg";

    case 3:
      return "/imagenes/3_tres-copas.jpg";

    case 4:
      return "/imagenes/4_cuatro-copas.jpg";

    case 5:
      return "/imagenes/5_cinco-copas.jpg";

    case 6:
      return "/imagenes/6_seis-copas.jpg";

    case 7:
      return "/imagenes/7_siete-copas.jpg";

    case 10:
      return "/imagenes/10_diez-copas.jpg";

    case 11:
      return "/imagenes/11_once-copas.jpg";

    case 12:
      return "/imagenes/12_doce-copas.jpg";

    default:
      return "";
  }
}

function muestraCarta(url: string): void {

  if (cartaReves && cartaReves instanceof HTMLImageElement) {
    cartaReves.src = url;
  }
}

// PINTAR MENSAJE

const pintarMensaje = (mensajeTexto: string): void => {

  if (mensaje && mensaje instanceof HTMLDivElement) {
    mensaje.textContent = mensajeTexto;
  }
};

// COMPROBAR PARTIDA

const comprobarPartida = () => {

  if (puntuacion > 7.5) {

    pintarMensaje("Game Over");

    bloquearBotones();
}

  if (puntuacion === 7.5) {

    pintarMensaje("¡Has alcanzado 7.5 puntos!");

    bloquearBotones();
}};

// BLOQUEAR BOTONES

const bloquearBotones = () => {

  if (botonCarta && botonCarta instanceof HTMLButtonElement) {
    botonCarta.disabled = true;
  }

  if (plantarseBoton && plantarseBoton instanceof HTMLButtonElement) {
    plantarseBoton.disabled = true;
  }};

// ME PLANTO

if (plantarseBoton && plantarseBoton instanceof HTMLButtonElement) {

  plantarseBoton.addEventListener("click", function () {

    mostrarMensajeFinal();
    bloquearBotones();

  });
}

const mostrarMensajeFinal = () => {

  if (puntuacion < 4) {

    pintarMensaje("Has sido muy conservador.");

  }

  if (puntuacion === 5) {

    pintarMensaje("Te ha entrado el canguelo eh?.");
}

  if (puntuacion === 6 || puntuacion === 7) {

    pintarMensaje("Casi casi...");

  }

  if (puntuacion === 7.5) {

    pintarMensaje("¡Lo has clavado! ¡Enhorabuena!");

  }

};

// NUEVA PARTIDA

if (nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement) {

  nuevaPartidaBoton.addEventListener("click", function () {

    nuevaPartida();

  });

}

const nuevaPartida = () => {

  puntuacion = 0;

  muestraPuntuacion();

  muestraCarta("/imagenes/back.jpg");

  pintarMensaje("");

  desbloquearBotones();

};

// DESBLOQUEAR BOTONES

const desbloquearBotones = () => {

  if (botonCarta && botonCarta instanceof HTMLButtonElement) {
    botonCarta.disabled = false;
  }

  if (plantarseBoton && plantarseBoton instanceof HTMLButtonElement) {
    plantarseBoton.disabled = false;
  }

};

// ¿QUÉ HABRÍA PASADO?

if (quePasariaBoton && quePasariaBoton instanceof HTMLButtonElement) {

  quePasariaBoton.addEventListener("click", function () {

    comprobarQueHabriaPasado();

  });

}


const comprobarQueHabriaPasado = () => {

  const numeroAleatorio = dameNumeroAleatorio();
  const cartaQuePasaria = obtenerNumeroCarta(numeroAleatorio);

  const urlCarta = obtenerUrlCarta(cartaQuePasaria);

  // Mostramos la carta que habría salido
  muestraCarta(urlCarta);

  const puntosCarta = obtenerPuntos(cartaQuePasaria);

  // Calculamos la puntuación hipotética
  const puntuacionHipotetica = sumarPuntos(puntosCarta);

  if (puntuacionHipotetica > 7.5) {

    pintarMensaje(
      "Habrías perdido con " + puntuacionHipotetica + " puntos"
    );

  } else {

    pintarMensaje(
      "No habrías perdido, hubieras tenido " +
      puntuacionHipotetica +
      " puntos."
    );

  }};
