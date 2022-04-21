"use strict";
(() => {
    var _a;
    const nombre = "Juan";
    const apellido = 'Pérez';
    const nombreCompleto = `${nombre} ${apellido}`;
    console.log(nombreCompleto);
    console.log(((_a = nombre[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
