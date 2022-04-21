"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '------'}`;
    };
    const heroName = fullName('Dr', 'Strange');
    console.log({ heroName });
})();
