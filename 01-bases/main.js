"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
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
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        },
    };
    const villanos = [
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
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    class Avenger {
        constructor(name, weapon) { }
    }
    class FlyingAvenger extends Avenger {
        constructor(name, weapon, fly) {
            super(name, weapon);
        }
    }
    const ironman = new Avenger("Tony Stark", "Iron Suit");
    const thor = new FlyingAvenger("Thor Odinson", "Hammer", true);
})();
(() => {
    const avengers = {
        nickFury: "Samuel L. Jackson",
        scarletWitch: "Elizabeth Olsen",
        ironMan: "Robert Downey Jr.",
        captainAmerica: "Chris Evans",
        thor: "Chris Hemsworth",
        activo: true,
        poder: 1500,
    };
    const { nickFury, activo, poder } = avengers;
    const printAvenger = (_a) => {
        var { ironMan, activo, poder } = _a, resto = __rest(_a, ["ironMan", "activo", "poder"]);
        console.log(`${ironMan} es el mejor héroe del universo`);
        console.log(`${activo}`);
        console.log(`${poder}`);
        console.log(resto);
    };
    const avengersArr = [
        "Samuel L. Jackson",
        "Elizabeth Olsen",
        "Robert Downey Jr.",
        "Chris Evans",
        "Chris Hemsworth",
    ];
    const [, ironman,] = avengersArr;
    console.log({ ironman });
})();
(() => {
    const ironman = {
        name: "Tony Stark",
        weapon: "Iron Suit"
    };
    const captainAmerica = {
        name: "Steve Rogers",
        weapon: "Shield"
    };
    const thor = {
        name: "Thor Odinson",
        weapon: "Hammer"
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    var a = 'Fernando';
    let b = 'Fernando';
    const getName = () => {
        console.log('hello world!');
    };
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '------'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName}`;
        }
    };
    const heroName = fullName("Dr", "Strange");
    console.log({ heroName });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '------'}`;
    };
    const heroName = fullName('Dr', 'Strange');
    console.log({ heroName });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const heroName = fullName('Dr', 'Strange');
    console.log({ heroName });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `Save the world`;
    let myFunction;
    let otherFunction;
    let otherFunctionTwo;
    myFunction = addNumber;
    myFunction(1, 2);
    myFunction = greet;
    myFunction('Alejandro');
    myFunction = saveTheWorld;
    myFunction();
    otherFunction = addNumber;
    otherFunction(1, 2);
    otherFunctionTwo = greet;
    otherFunctionTwo('Alejandro');
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Activated';
    };
    const heroName = returnName();
    const batisignal = activateBatisignal();
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Puede correr muy rapido", "Viaja por el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 24,
        powers: ["Puede volar", "Súper fuerza"],
    };
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Puede correr muy rapido", "Viaja por el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 24,
        powers: ["Puede volar", "Súper fuerza"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let myCustomVariable = 'Alejandro';
    console.log(myCustomVariable);
})();
(() => {
    let avengers = 10;
    let exists;
    avengers = 'Iron Man';
    console.log(avengers.charAt(0));
    avengers = 125.54658;
    console.log(avengers.toFixed(2));
})();
(() => {
    const test = [1, 2, 3, 4, 5, "6"];
    const avengers = ["Iron man", "Thor", "Superman"];
    const numbers = [1, 2, 3, 4, 5];
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    isBatman = isSuperman ? true : false;
    console.log({ isBatman });
})();
(() => {
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    let c = Color.Green;
    console.log(c);
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["Low"] = 1] = "Low";
        AudioLevel[AudioLevel["Medium"] = 2] = "Medium";
        AudioLevel[AudioLevel["High"] = 10] = "High";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.Medium;
    let currentAudio = 10;
    console.log(currentAudioLevel);
    console.log(currentAudioLevel);
})();
(() => {
    const abc = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('Error');
})();
(() => {
    let nada = undefined;
    let isActive = undefined;
})();
(() => {
    let numero = 10;
    let numero2 = 10.5;
    let numero3 = 0xFF;
    let numero4 = 0b1010;
    let numero5 = 0o744;
    let numero6 = Infinity;
    let numero7 = -Infinity;
    let numero8 = NaN;
    let numero9 = Number.MAX_VALUE;
    let numero10 = Number.MIN_VALUE;
    let numero11 = Number.MAX_SAFE_INTEGER;
    let numero12 = Number.MIN_SAFE_INTEGER;
    let numero13 = Number.EPSILON;
    let numero14 = Number('11');
})();
(() => {
    var _a;
    const nombre = "Juan";
    const apellido = 'Pérez';
    const nombreCompleto = `${nombre} ${apellido}`;
    console.log(nombreCompleto);
    console.log(((_a = nombre[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(() => {
    const hero = ['Dr Strange', 100, false];
    hero[0] = 'Ironman';
    hero[1] = 1;
    hero[2] = true;
})();
(() => {
    function callBatman() {
        console.log('batiseñal');
        return;
    }
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map