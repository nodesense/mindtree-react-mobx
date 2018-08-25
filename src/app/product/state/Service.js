export default class ProductService  {
    static getProducts() {
        return fetch('http://localhost:7070/api/products')
               .then ( response => response.json())
    }

    static getBrands() {
        return fetch('http://localhost:7070/delayed/api/brands')
               .then ( response => response.json())
    }

    static getProduct(id) {
        return fetch('http://localhost:7070/delayed/api/products/' + id)
               .then ( response => response.json())
    }
}