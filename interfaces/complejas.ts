(() => {
    // Las interfaces no implementan metodos

    interface Client {
        name: string;
        age?: number;
        address?: Address;
        getFullAddress(id: string): void;
    }
    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: "Fernando",
        age: 0,
        address: {
            id: 1,
            zip: "12345",
            city: "San Francisco"
        },
        getFullAddress(id: string) {
            console.log(`${this.name} lives in ${this.address?.city}`);
        }
    }

    console.log(client.address?.id);


})();
