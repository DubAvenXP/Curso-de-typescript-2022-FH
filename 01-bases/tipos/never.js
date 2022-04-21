"use strict";
(() => {
    // Tipo never
    // La funcion no deberia finalizar exitosamente
    const abc = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('Error');
})();
