(() => {
    class Apocalipsis {
        static instance: Apocalipsis;

        private constructor(public name: string) {}

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Apocalipsis");
            }
            return Apocalipsis.instance;
        }

        changeName(newName: string): void {
            this.name = newName;
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();
    apocalipsis.changeName("Apocalipsis 2");
})();
