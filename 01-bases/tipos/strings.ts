(() => {
    const nombre: string = "Juan";
    const apellido: string = 'Pérez';
    const nombreCompleto: string = `${nombre} ${apellido}`;
    console.log(nombreCompleto);
    console.log(nombre[10]?.toUpperCase() || 'No esta presente');
})();
