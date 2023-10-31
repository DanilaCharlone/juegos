export function ruletaCasinoo() {
// declaracion de los colores
const colores = ["negro","rojo"];
// Generar un número aleatorio entre 0 y 1
const valorColorGanador = ()=> Math.floor(Math.random()*2);
// genera el color ganador
let colorGanador = colores[valorColorGanador()]

// generar el número de intentos y el número máximo de intentos permitidos.
let intentoActual = 1;

const maximoIntento = 1;

// Iniciar el juego.
console.log("¡Bienvenido al juego 'Ruleta Casino'!");
console.log(`Aposta por el color rojo o negro. Tenes ${maximoIntento} intento.`);

// 4. Iniciar un bucle para permitir que el jugador realice intentos de numeros.
while (intentoActual <= maximoIntento) {
    const colorUsuario = prompt("Ingresa el color:");

    // Comparar el color ingresado con el color ganador
    if (colorUsuario == colorGanador) {
        console.log(`Salio el ${colorGanador} ¡Felicidades! Ganaste la Ruleta`);
        break; 
        /* Salir del bucle (while) si se adivina el número y continuo desde el if sin incrementar intentos y en el if como el
         intento actual es menor al maximo (lo adivine a la primera)ahi termina */
    } 
     //  Incrementar el contador de intentos si el color que ingrese no es el color ganador
     intentoActual++;
}

// Si tu el color ingresado no es el ganador entonces incrementa un intento, al ahcer esto el intento actual es mayor al maximo y perdes
if (intentoActual > maximoIntento) {
    console.log(`Salio el ${colorGanador} Perdiste la Ruleta`);
}
}
