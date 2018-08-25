import {observable, 
        action, computed} from 'mobx';

import ProductService from './Service';

class ProductState {
    @observable
    products = []

    @observable
    loading = false;

    // product to edit
    @observable
    product= { name: '', price: 0 }

    @observable
    brands = []

    @action
    setProducts(products) {
        console.log("Received")
        this.products = products;
        this.loading = false;
    }

    @action
    setLoading(loading) {
        this.loading = loading
    }

    @action
    getProducts() {
        this.loading = true;

        return ProductService
            .getProducts()
            .then (products => this.setProducts(products))
            .catch ( error => this.setLoading(false))
    }

    @action
    setBrands(brands) {
        this.brands = brands;
    }

    @action
    setProduct(product) {
        this.product = product;
    }

    // @action
    // getProduct(id) {
    //     // calls render two times one for each api
    //     // ProductService.getProduct(id)
    //     //               .then (product => this.setProduct(product));

    //     // ProductService.getBrands()
    //     //               .then (brands => this.setBrands(brands))

    //     Promise.all ([
    //         ProductService.getProduct(id),
    //         ProductService.getBrands()
    //     ]).then (results => {
    //         // results[0] shall have product,
    //         // results[1] shall have brands
    //         this.setProduct(results[0]);
    //         this.setBrands(results[1]);
    //       //  this.setLoading(true);
    //     })
    // }

    // https://github.com/mobxjs/mobx-react/issues/259
    getProduct(id) {
        return Promise.all ([
            ProductService.getProduct(id),
            ProductService.getBrands()
        ])
        // .then (results => {
        //             // results[0] shall have product,
        //             // results[1] shall have brands
        //             this.setProduct(results[0]);
        //             this.setBrands(results[1]);
        //           //  this.setLoading(true);
        // })
        
        .then (action ("fetchSuccess", results => {
            // results[0] shall have product,
            // results[1] shall have brands
            this.product = results[0];
            this.brands = results[1];
        }))
    }

    @action
    clearProduct() {
        this.setProduct({name: '', price: 0 });
        this.setBrands([]);
    }

}

export default new ProductState();