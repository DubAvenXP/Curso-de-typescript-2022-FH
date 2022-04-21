// modulo tipos

(() => {
    // Tipos
    const batman: string = "Bruce";
    const superman: string = "Clark";

    const existe: boolean = false;

    // Tuplas
    const parejaHeroes: [string, string] = [batman, superman];
    const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

    // Arreglos
    const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

    //Enumeraciones
    enum Fuerza {
        menorFuerza = 0,
        fuerzaNormal = 1,
        fuerzaNormalSuper = 5,
        fuerzaSuperior = 100,
    }
    const fuerzaFlash: Fuerza = Fuerza.fuerzaNormalSuper;
    const fuerzaSuperman: Fuerza = Fuerza.fuerzaSuperior;
    const fuerzaBatman: Fuerza = Fuerza.fuerzaNormal;
    const fuerzaAcuaman: Fuerza = Fuerza.menorFuerza;

    // Retorno de funciones
    function activar_batiseñal(): string {
        return "activada";
    }

    function pedir_ayuda(): void {
        console.log("Auxilio!!!");
    }

    // Aserciones de Tipo
    const poder: any = "100";
    const largoDelPoder: number = <number>poder.length;
    console.log(largoDelPoder);
})();

// modulo funciones

(() => {
    // Funciones Básicas
    function sumar(a: number, b: number): number {
        return a + b;
    }

    const contar = (heroes: string[]): number => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);

    //Parametros por defecto
    const llamarBatman = (llamar: boolean = true): void => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };

    llamarBatman();

    // Rest?
    const unirheroes = (...personas: string[]): string => {
        return personas.join(", ");
    };

    // Tipo funcion
    const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: string[]) => {};

    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco: (numero: number, texto: string, booleano: boolean, arreglo: string[]) => void;
    noHaceNadaTampoco = noHaceNada;
})();
