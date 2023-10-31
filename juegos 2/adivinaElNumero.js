export function adivinaElNumero() {

// 1. Generar un número aleatorio entre 1 y 100.
const numeroOculto = Math.floor(Math.random() * 100) + 1;

// 2. Inicializar el número de intentos y el número máximo de intentos permitidos.
let intentoActual = 1;

const maximoIntento = 10;

// 3. Iniciar el juego.

console.log("¡Bienvenido al juego 'Adivina el Número'!");
console.log(`Estoy pensando en un número entre 1 y 100. Tienes ${maximoIntento} intentos para adivinarlo.`);

// 4. Iniciar un bucle para permitir que el jugador realice intentos de numeros.
while (intentoActual <= maximoIntento) {
    const numeroUsuario = prompt("Ingresa el numero:");

    // 5. Verificar si el numero ingresado es un número válido (entero)
    // parseint traduce un texto a un numero entero
    //isnan traduce y verifica si lo ingresado es un numero valido
    //numero entero es un numeor y numero usuario es un texto
    const numeroEntero = parseInt(numeroUsuario);
    if (isNaN(numeroEntero)) {
        console.log("Por favor, ingresa un número válido.");
        continue;
    }

    // 6. Comparar el numero ingresado con el número oculto.
    if (numeroEntero === numeroOculto) {
        console.log(`¡Felicidades! Adivinaste el número ${numeroOculto} en ${intentoActual} intentos.`);
        break; // Salir del bucle si se adivina el número.
    } else if (numeroEntero < numeroOculto) {
        console.log("El número es mayor. Intenta de nuevo.");
    } else {
        console.log("El número es menor. Intenta de nuevo.");
    }
     // 7. Incrementar el contador de intentos.
     intentoActual++;
}

// 8. Si se agotan los intentos, mostrar un mensaje de juego perdido.
if (intentoActual > maximoIntento) {
    console.log(`¡Se te han agotado los intentos! El número correcto era ${numeroOculto}.`);
}
}