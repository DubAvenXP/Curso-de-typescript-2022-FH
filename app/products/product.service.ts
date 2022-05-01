import { Product } from "./product.model";
import { CreateProductDto } from "./product.dto";
import faker from "@faker-js/faker";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
    const newProduct = {
        ...data,
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        },
    };
    products.push(newProduct);
    return newProduct;
};

export const getProducts = (): Product[] => {
    return products;
};

export const getProductById = (id: number): Product => {
    return products.find((product) => product.id === id);
};

export const updateProduct = (id: string, data: Product): void => {
    products[id] = data;
};

export const deleteProduct = (id: string): void => {
    const index = products.findIndex((product) => product.id === id);
    products.splice(index, 1);
};
