(() => {
    let isSuperman: boolean = true;
    let isBatman: boolean = false;

    isSuperman = true && false;

    isBatman = isSuperman ? true : false;

    console.log({ isBatman });
})();
