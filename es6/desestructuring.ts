(() => {
    type avengers = {
        nickFury: string;
        scarletWitch: string;
        ironMan: string;
        captainAmerica: string;
        thor: string;
        activo: boolean;
        poder: number;
    };

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

    const printAvenger = ({ ironMan, activo, poder, ...resto }: avengers) => {
        console.log(`${ironMan} es el mejor héroe del universo`);
        console.log(`${activo}`);
        console.log(`${poder}`);
        console.log(resto);
    };

    const avengersArr: string[] = [
        "Samuel L. Jackson",
        "Elizabeth Olsen",
        "Robert Downey Jr.",
        "Chris Evans",
        "Chris Hemsworth",
    ];

    const [, ironman,] = avengersArr;
    console.log({ironman});
})();
