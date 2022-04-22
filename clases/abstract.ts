(() => {
    abstract class Mutante {
        constructor(protected name: string, public realName: string) {}
    }

    class Xmen extends Mutante {

        salvarMundo(): void {
            console.log(`${this.name} ha salvado al mundo`);
        }
    }

    class Villian extends Mutante {
        dominarMundo(): void {
            console.log('Dominando el mundo');
        }
    }

    const wolverine = new Xmen("Wolverine", "Logan");
    const dominador = new Villian("Dominador", "Charles Francis Xavier");

    const printName = (mutante: Mutante): void => {
        console.log(mutante.realName);
    }

    printName(wolverine);
    printName(dominador);
})();
