import "./style.css";

let puntuacion: number = 0;
let resultadoFinal = false;

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

  if (resultadoFinal === false) {

    const numeroAleatorio = dameNumeroAleatorio();
    const carta = obtenerNumeroCarta(numeroAleatorio);

    const urlCarta = obtenerUrlCarta(carta);
    muestraCarta(urlCarta);

    const puntosCarta = obtenerPuntos(carta);
    puntuacion = sumarPuntos(puntosCarta);

    muestraPuntuacion();
    comprobarPartida();
  }};

// GENERAR NÚMERO ALEATORIO

const dameNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;};

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

// COMPROBAR PARTIDA

const comprobarPartida = () => {

  if (puntuacion > 7.5) {
    resultadoFinal = true;

    if (mensaje) {
      mensaje.textContent = "Game Over";
    }}

  if (puntuacion === 7.5) {
    resultadoFinal = true;

    if (mensaje) {
      mensaje.textContent = "¡Has alcanzado 7.5 puntos!";
    }}};

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
  }}

function muestraCarta(url: string): void {

  if (cartaReves && cartaReves instanceof HTMLImageElement) {
    cartaReves.src = url;
  }}

// MOSTRAR PUNTUACIÓN

function muestraPuntuacion(): void {

  if (elementoPuntuacion) {
    elementoPuntuacion.textContent = puntuacion.toString();
  }}

// ME PLANTO

if (plantarseBoton && plantarseBoton instanceof HTMLButtonElement) {

  plantarseBoton.addEventListener("click", function () {

    resultadoFinal = true;

    mostrarMensajeFinal();
  });
}

const mostrarMensajeFinal = () => {

  if (!mensaje) {
    return;
  }

  if (puntuacion < 4) {
    mensaje.textContent = "Has sido muy conservador.";
  }

  if (puntuacion === 5) {
    mensaje.textContent = "Te ha entrado el canguelo eh?.";
  }

  if (puntuacion === 6 || puntuacion === 7) {
    mensaje.textContent = "Casi casi...";
  }

  if (puntuacion === 7.5) {
    mensaje.textContent = "¡Lo has clavado! ¡Enhorabuena!";
  }};

// NUEVA PARTIDA

if (nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement) {

  nuevaPartidaBoton.addEventListener("click", function () {
    nuevaPartida();
  });
}

const nuevaPartida = () => {

  puntuacion = 0;
  resultadoFinal = false;

  muestraPuntuacion();

  if (cartaReves && cartaReves instanceof HTMLImageElement) {
    cartaReves.src = "/imagenes/back.jpg";
  }

  if (mensaje) {
    mensaje.textContent = "";
  }};

// ¿QUÉ HABRÍA PASADO?

if (quePasariaBoton && quePasariaBoton instanceof HTMLButtonElement) {

  quePasariaBoton.addEventListener("click", function () {

    if (resultadoFinal === true) {
      comprobarQueHabriaPasado();
    }

  });
}

const comprobarQueHabriaPasado = () => {

  const numeroAleatorio = dameNumeroAleatorio();
  const cartaQuePasaria = obtenerNumeroCarta(numeroAleatorio);
  const puntosCarta = obtenerPuntos(cartaQuePasaria);
  const puntuacionHipotetica = sumarPuntos(puntosCarta);
  
  if (mensaje) {
    if (puntuacionHipotetica > 7.5) {
      mensaje.textContent =
        "Habrías perdido " + puntuacionHipotetica + " puntos";
    } else {
      mensaje.textContent =
        "No habrías perdido, hubieras tenido " +
        puntuacionHipotetica +
        " puntos.";
    }}};

