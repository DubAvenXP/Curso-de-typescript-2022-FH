"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '------'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName}`;
        }
    };
    const heroName = fullName("Dr", "Strange");
    console.log({ heroName });
})();
