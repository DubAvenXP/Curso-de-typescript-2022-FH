(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    };

    let flash: Hero = {
        name: "Barry Allen",
        age: 24,
        powers: ["Puede correr muy rapido", "Viaja por el tiempo"],
    };
    let superman: Hero = {
        name: "Clark Kent",
        age: 24,
        powers: ["Puede volar", "Súper fuerza"],
        getName() {
            return this.name;
        },
    };
})();
