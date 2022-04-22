(() => {
    class Avenger {
        static avgAge = 30;
        static getAvgAge(): number {
            return Avenger.avgAge;
        }

        constructor(
            private name: string,
            private team: string,
            public realName: string
        ) {}

        public bio(): string {
            return `${this.name} is a member of the ${this.team} team`;
        }
    }

    const antman: Avenger = new Avenger("Antman", "Cap", "Scott Lang");
    console.log(antman);
})();
