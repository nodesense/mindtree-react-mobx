import React, {Component} from "react";
import PropTypes from "prop-types";

import {observer, inject} from 'mobx-react';

@inject('productState')
@observer
export default class ProductEdit extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        // /products/edit/1234
        // /products/edit/:id
        // match is given by router
        let id = this.props.match.params.id;

        this.props.productState.getProduct(id)
    }

    componentWillUnmount() {
        this.props.productState.clearProduct();
    }

    onChangeValue = (e) => {
        let control = e.target;
        console.log(control.name, control.value)
        // BAD? no @action
        //this.props.productState.product[control.name] = control.value;
        
        let product =  Object.assign({}, this.props.productState.product, {[control.name]: control.value} )
        this.props.productState.setProduct(product);
    }
    
    render() {
        let {brands, product, loading} = this.props.productState;
        console.log("Product Edit render");
        return (
            <div> 
            <h2>Product Edit</h2>
            <p>Name {product.name}</p>
            <p>Brands Total {brands.length}</p>
            
            <input name="name" 
                   value={product.name}
                   onChange={this.onChangeValue} 
                    />

            <input name="price" 
                    value={product.price} 
                    onChange={this.onChangeValue} 
                    />

            </div>
        )
    }
} 


ProductEdit.defaultProps = {
    
}

ProductEdit.propTypes = {
    
}