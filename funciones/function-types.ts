(() => {
    const addNumber = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hello ${name}`;
    const saveTheWorld = (): string => `Save the world`;

    let myFunction: Function;
    let otherFunction: (y: number, x: number) => number;
    let otherFunctionTwo: (y: string) => string;
    // myFunction = 10;
    myFunction = addNumber;
    myFunction(1,2);
    
    myFunction = greet;
    myFunction('Alejandro');

    myFunction = saveTheWorld;
    myFunction();

    otherFunction = addNumber;
    otherFunction(1,2);

    otherFunctionTwo = greet;
    otherFunctionTwo('Alejandro');


})();
