// injected from webpack
import config from 'config';

console.log("*** ", config)

export default class ProductService  {
    static getProducts() {
        return fetch('http://localhost:7070/api/products')
               .then ( response => response.json())
    }

    static getBrands() {
        return fetch('http://localhost:7070/api/brands')
               .then ( response => response.json())
    }

    static getProduct(id) {
        return fetch('http://localhost:7070/api/products/' + id)
               .then ( response => response.json())
    }
}