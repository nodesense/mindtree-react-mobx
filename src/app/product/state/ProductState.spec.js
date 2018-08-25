import fetchMock from 'fetch-mock';
//FIXME: investigate
//jest.mock('./Service')

import productState from './ProductState';


import {toJS} from 'mobx';

test("product State test", (done) => {

    fetchMock.get('http://localhost:7070/api/products', [{id: 1},{id: 2}]);

    // get product with id mock, /api/brands

    productState.getProducts()
    .then ( () => {
        expect(toJS(productState.products))
        .toEqual([{id: 1},{id: 2}])
        done();
    })
})

test("testing getProduct and brands", (done) => {
    fetchMock.get('http://localhost:7070/api/products/100', {id: 100});
    fetchMock.get('http://localhost:7070/api/brands', [{id: 1000},{id: 2000}]);

    productState.getProduct(100)
    .then ( () => {
        expect(toJS(productState.product))
        .toEqual({id: 100});

        expect(toJS(productState.brands))
        .toEqual([{id: 1000},{id: 2000}]);

        done();
    })

})