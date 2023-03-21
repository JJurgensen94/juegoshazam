// Pedir al usuario su nombre
const nombreUsuario = prompt("Ingresa tu nombre:");

// Obtener referencias a los elementos 
const formulario = document.getElementById("formulario");
const inputNumero = document.getElementById("numero");
const resultado = document.getElementById("resultado");
const resetButton = document.getElementById("reset");
const mensajeBienvenida = document.getElementById("nombre-usuario");

// Mostrar mensaje de bienvenida
mensajeBienvenida.textContent = `¡Bienvenido, ${nombreUsuario}!`;

// Variables de juego
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let maxIntentos = 10;

// Funciones de juego
function compararNumeros(numeroUsuario) {
  intentos++;
  if (numeroUsuario === numeroAleatorio) {
    resultado.innerHTML = `<p class="exito">⚡Shaaaaazaaaaam⚡ ${nombreUsuario} Adivinaste el número en ${intentos} intentos.</p>`;
    inputNumero.disabled = true;
  } else if (intentos === maxIntentos) {
    resultado.innerHTML = `<p class="fracaso">Lo siento, ${nombreUsuario}. Has agotado tus ${maxIntentos} intentos. El número era ${numeroAleatorio}.</p>`;
    inputNumero.disabled = true;
  } else {
    let pista = numeroUsuario < numeroAleatorio ? "más alto" : "más bajo";
    resultado.innerHTML = `<p class="fracaso">Ese no es el número, ${nombreUsuario}. Prueba con un número ${pista}. Te quedan ${maxIntentos - intentos} intentos.</p>`;
  }
}

function manejarFormulario(evento) {
  evento.preventDefault();
  let numeroUsuario = parseInt(inputNumero.value);
  if (numeroUsuario >= 1 && numeroUsuario <= 100) {
    compararNumeros(numeroUsuario);
    inputNumero.value = "";
    inputNumero.focus();
  } else {
    resultado.innerHTML = `<p class="fracaso">El número debe estar entre 1 y 100, ${nombreUsuario}. Inténtalo de nuevo.</p>`;
  }
}

function reiniciarJuego() {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  maxIntentos = 10;
  inputNumero.disabled = false;
  resultado.innerHTML = "";
}

// Event listeners
formulario.addEventListener("submit", manejarFormulario);
resetButton.addEventListener("click", reiniciarJuego);



