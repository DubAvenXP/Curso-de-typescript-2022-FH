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
    const noHaceNada = (
        numero: number,
        texto: string,
        booleano: boolean,
        arreglo: string[]
    ) => {};

    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco: (
        numero: number,
        texto: string,
        booleano: boolean,
        arreglo: string[]
    ) => void;
    noHaceNadaTampoco = noHaceNada;
})();

(() => {
    type Car = {
        carroceria: string;
        modelo: string;
        antibalas: boolean;
        pasajeros: number;
        disparar?: () => void;
    }
    // Objetos
    const batimovil: Car = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };

    const bumblebee: Car = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            // El metodo disparar es opcional
            console.log("Disparando");
        },
    };

    type Mutants = {
        nombre: string;
        edad: number | undefined;
        mutante: boolean;
    }

    // Villanos debe de ser un arreglo de objetos personalizados
    const villanos: Mutants[] = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];

    // Multiples tipos
    type Charles = {
        poder: string;
        estatura: number;
    }
    type Apocalipsis = {
        lider: boolean;
        miembros: string[];
    }
    // cree dos tipos, uno para charles y otro para apocalipsis
    const charles: Charles = {
        poder: "psiquico",
        estatura: 1.78,
    };

    const apocalipsis: Apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };

    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    let mystique: Charles | Apocalipsis;

    mystique = charles;
    mystique = apocalipsis;
})();
