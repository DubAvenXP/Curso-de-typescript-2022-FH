(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    // interface Size = 'S' | 'M' | 'L' | 'XL'; // Error
    type Product = {
        id: string | number;
        name: string;
        price: number;
        createdAt: Date;
        stock: number;
        sizes: Sizes[];
    }
    // Interface can extend other interfaces
    interface ProductInterface {
        id: string | number;
        name: string;
        price: number;
        createdAt: Date;
        stock: number;
        sizes: Sizes[];
    }
})()