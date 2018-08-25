
console.log("Loading mock file ");
export default class ProductService  {
    static getProducts() {
        console.log("*** MOCK getproducts called")
        return Promise.resolve([{id: 1, name:'Test Me', price: 100, qty: 10}])
    }

    static getBrands() {
        return   Promise.resolve([{id: 1000}, {id: 2000}])
    }

    static getProduct(id) {
        return  Promise.resolve({id: 100})
    }
}