import {observable, autorun} from 'mobx';

import calculator from './state/Calculator';

// store object

// store is a collection of states
const store = {
    // key: state instance
    calculator: calculator, // state instance
    // other states
}

export default store;


// class ProductItem {
//     id = Math.random();

//     @observable
//     name = 'first value';

//     @observable price = 100;
// }

// const item = new ProductItem;

// // subscriber
// autorun( function () {
//     console.log("AutoRun ID ", item.id);
// })

// //susbcribed
// autorun( function() {
//     console.log("AutoRun Price", item.price, 
//                                  item.name)
// })


// //susbcribed item
// autorun( function() {
//     console.log("AutoRun Item", item)
// })

// item.id = Math.random();
// console.log("New id is", item.id);

// // observable changed
// item.price = Math.ceil(Math.random() * 100);


// item.name = 'New Product';
// // setInterval( () => {
// //     item.price = Math.ceil(Math.random() * 100);
// // }, 5000);

// // function printValues() {
// //     console.log('product ', item.id, 
// //                             item.name, 
// //                             item.price);
// // }


// // item.name = 'Phone 1';
// // item.price = 200;

// // console.log('product ', item.id, 
// //                         item.name, 
// //                         item.price);

// // printValues()