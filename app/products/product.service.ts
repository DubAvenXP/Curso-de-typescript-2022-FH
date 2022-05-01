import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';
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

export const getProducts = (query: FindProductDto): Product[] => {
    // query.tags.pop();
    return products;
};

export const getProductById = (id: Product['id']): Product => {
    return products.find((product) => product.id === id);
};

export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
    const index = products.findIndex((product) => product.id === id);
    const prevData = products[index];
    products[index] = {
        ...prevData,
        ...changes,
    }
    return products[index];
};

export const deleteProduct = (id: Product['id']): void => {
    const index = products.findIndex((product) => product.id === id);
    products.splice(index, 1);
};
