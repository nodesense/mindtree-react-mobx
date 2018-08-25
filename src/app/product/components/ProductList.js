
import React, {Component} from "react";
import PropTypes from "prop-types";
import {observer, inject} from 'mobx-react';

import {Link} from 'react-router-dom';


const Loading = () => (
    <div>
        <h2>Loading ....</h2>
        <img src="/assets/loading.gif" />
    </div>
)

// deconstruct on function argument
// products = props.products
const Products = ({products}) => (
    <ul>
        {
            products.map(product => (
                <li key={product.id}>
                   <Link to={`/products/edit/${product.id}`}>
                    {product.name}
                   </Link> 
                </li>
            ))
        }
    </ul>
)

//inject "productState" call getProducts, get data displayed
@inject("productState", "calculator")
@observer
export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.productState.getProducts();
    }
    
    render() {
        let {products, loading} = this.props.productState;
        return (
            <div> 
            <h2>Product List</h2>

            {
                loading? 
                    <Loading />  : 
                    <Products products={products} />
            }


            </div>
        )
    }
} 


ProductList.defaultProps = {
    
}

ProductList.propTypes = {
    
}