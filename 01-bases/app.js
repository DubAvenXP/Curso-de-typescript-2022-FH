"use strict";
// modulo tipos
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
// modulo funciones
(() => {
    // Funciones Básicas
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    //Parametros por defecto
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    // Rest?
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    // Tipo funcion
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
