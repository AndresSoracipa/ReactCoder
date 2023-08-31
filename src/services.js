const products = [
    { id: "1", name: "Perfume Hombre 1", price: 30, category: "hombre" },
    { id: "2", name: "Perfume Hombre 2", price: 50, category: "hombre" },
    { id: "3", name: "Perfume Hombre 3", price: 80, category: "hombre" },

    { id: "4", name: "Perfume Mujer 1", price: 40, category: "mujer" },
    { id: "5", name: "Perfume Mujer 2", price: 75, category: "mujer" },
    { id: "6", name: "Perfume Mujer 3", price: 90, category: "mujer" },

    { id: "7", name: "Perfume Niños 1", price: 30, category: "niños" },
    { id: "8", name: "Perfume Niños 2", price: 50, category: "niños" },
    { id: "9", name: "Perfume Niños 3", price: 60, category: "niños" },
];

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const product = products.find(p => p.id === id);

            if (product) {
                resolve(product);
            } else {
                reject("No existe el producto")
            }

        }, 1000)
    })
}

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const productsFiltered = category 
                ? products.filter((product) => product.category === category) 
                : products;

            resolve(productsFiltered);
        }, 1000);
    });
};