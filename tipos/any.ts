(() => {
    let avengers: any = 10;
    let exists;
    avengers = 'Iron Man';

    console.log((avengers as string).charAt(0));
    
    avengers = 125.54658;
    console.log(<number>avengers.toFixed(2));

})();
