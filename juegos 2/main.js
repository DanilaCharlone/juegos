import {ruletaCasinoo} from "./ruletaCasinoo.js"
import {adivinaElNumero} from "./adivinaElNumero.js"

function menu() {
    console.log(`
        Selecciona el juego:
        1 - para ruleta casino
        2 - para adivina el numero
    `);

    //editar
    const juegoElegido = prompt("Ingrese el juego que desee jugar")
    if(juegoElegido === "1"){
        ruletaCasinoo();
    }
    else if (juegoElegido === "2")
        adivinaElNumero();
    else
        console.log("Ingrese un valor correcto");
}


menu();