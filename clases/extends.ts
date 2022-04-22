(() => {
    class Avenger {
        constructor(private name: string, public realName: string) {}

        protected getFullName(): string {
            return `${this.name} ${this.realName}`;
        }

        set setName(value: string) {
            this.name = value;
        }
    }

    class Xmen extends Avenger {
        constructor(name: string, realName: string, public isMutant: boolean) {
            super(name, realName);
        }

        get fullName(): string {
            return this.getFullNameXmen();
        }

        getFullNameXmen(): string {
            return super.getFullName();
        }
    }

    const wolverine = new Xmen("Wolverine", "Logan", true);
    



})();
