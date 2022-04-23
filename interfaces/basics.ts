(() => {
    interface Hero {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: "Barry Allen",
        age: 24,
        powers: ["Speed", "Intellect"],
        getName() {
            return this.name;
        },
    };
})();
