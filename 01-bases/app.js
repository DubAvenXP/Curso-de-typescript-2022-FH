"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["menorFuerza"] = 0] = "menorFuerza";
        Fuerza[Fuerza["fuerzaNormal"] = 1] = "fuerzaNormal";
        Fuerza[Fuerza["fuerzaNormalSuper"] = 5] = "fuerzaNormalSuper";
        Fuerza[Fuerza["fuerzaSuperior"] = 100] = "fuerzaSuperior";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.fuerzaNormalSuper;
    const fuerzaSuperman = Fuerza.fuerzaSuperior;
    const fuerzaBatman = Fuerza.fuerzaNormal;
    const fuerzaAcuaman = Fuerza.menorFuerza;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
