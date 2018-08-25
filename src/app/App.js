
import React, {Component} from "react";
import PropTypes from "prop-types";

import {BrowserRouter as Router, 
        Switch,
        Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';
import Calc from './components/Calc';

// import ProductList from './product/components/ProductList';
// import Cart from './cart/components/Cart';
// import Login from './auth/components/Login';


export default class App extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <Router>
            <div> 
            <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/cart" exact component={Cart} /> */}
                    {/* <Route path="/products" exact component={ProductList} /> */}
                    {/* <Route path="/login" exact component={Login} /> */}
                    <Route path="/calc" exact component={Calc} />
                    <Route path="/counter" exact component={Counter} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
            <Footer />
            </div>
            </Router>
        )
    }
} 


App.defaultProps = {
    
}

App.propTypes = {
    
}