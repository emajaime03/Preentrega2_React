const products = [
    {
        id: 1,
        name: 'AMD Ryzen 5 5600G',
        price: 2000,
        category: 'procesador'
    }, {
        id: 2,
        name: 'Intel i5 14600KF',
        price: 4000,
        category: 'procesador'
    }, {
        id: 3,
        name: 'Intel i9 14900K',
        price: 10500,
        category: 'procesador'
    }, {
        id: 4,
        name: 'ROG STRIX B760-G GAMING WIFI',
        price: 1500,
        category: 'mother'
    }, {
        id: 5,
        name: 'ROG MAXIMUS Z790 FORMULA',
        price: 2000,
        category: 'mother'
    }, {
        id: 6,
        name: 'ROG MAXIMUS Z790 HERO EVA-02 EDITION',
        price: 2300,
        category: 'mother'
    }, {
        id: 7,
        name: 'GeForce RTX 4090',
        price: 40000,
        category: 'gpu'
    }, {
        id: 8,
        name: 'GeForce RTX 3080',
        price: 20000,
        category: 'gpu'
    }, {
        id: 9,
        name: 'AMD Radeon RX 7600',
        price: 19000,
        category: 'gpu'
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        resolve(products)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        resolve(products.find(prod => prod.id == productId))
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        resolve(products.filter(prod => prod.category == category))
    })
}