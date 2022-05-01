import {
    addProduct,
    getProducts,
    products,
    updateProduct,
} from "./products/product.service";

import faker from "@faker-js/faker";

for (let i = 0; i < 10; i++) {
    addProduct({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        stock: faker.datatype.number({ min: 10, max: 100 }),
        size: faker.random.arrayElement(["S", "M", "L", "XL"]),
        color: faker.commerce.color(),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        tags: [
            faker.commerce.productAdjective(),
            faker.commerce.productMaterial(),
        ],
        isNew: faker.datatype.boolean(),
        categoryId: faker.datatype.uuid(),
    });
}

const product = products[0];
updateProduct(product.id, {
    name: "New name",
    price: product.price + 999,
});

getProducts({
    stock: 10,
    color: "red",
});
