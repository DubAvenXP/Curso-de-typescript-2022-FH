(() => {
    // Nullish Coalescing
    /* 
    
    El operador ?? es un operador de coalescencia 
    que se utiliza para asignar un valor a una variable 
    si es que esta no es null o undefined.
    
*/

    const createProduct = (
        id: string | number,
        isNew?: boolean,
        stock?: number
    ) => {
        return {
            id,
            stock: stock ?? 10,
            isNew: isNew ?? true,
        };
    };

    createProduct("123", true, 10);
})();
