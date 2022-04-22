(() => {
    function callBatman(): void {
        console.log('batiseñal');
        return;
    }

    const a = callBatman();
    console.log(a);
})()