(() => {
    class Avenger {
        constructor(name: string, weapon: string) {}
    }

    class FlyingAvenger extends Avenger {
        constructor(name: string, weapon: string, fly: boolean) {
            super(name, weapon);
        }
    }

    const ironman = new Avenger("Tony Stark", "Iron Suit");
    const thor = new FlyingAvenger("Thor Odinson", "Hammer", true);
})()