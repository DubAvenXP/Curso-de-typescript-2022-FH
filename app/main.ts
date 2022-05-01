import { addProduct, getProducts } from "./products/product.service";

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

console.log(getProducts());
