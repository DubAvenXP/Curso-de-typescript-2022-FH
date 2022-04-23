(() => {
    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addTwoNumbersFunction: addTwoNumbers;
    addTwoNumbersFunction = (a: number, b: number) => {
        return a + b;
    }
})();
