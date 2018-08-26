
import React from "react";
import PropTypes from "prop-types";

import {NavLink} from 'react-router-dom';


export default function Header(props) { 
        return (
            <div  > 
            <h2>Mobx App</h2>

            <NavLink to="/" 
                    exact 
                    className="button"  
                    activeClassName="success" >
                    Home
            </NavLink>

         {
                navigator.onLine && 
            <NavLink to="/products" 
                    exact 
                    className="button"  
                    activeClassName="success" >
                    Products
            </NavLink>
         }

            <NavLink to="/cart" 
                    exact 
                    className="button"  
                    activeClassName="success" >
                    Cart
            </NavLink>

            <NavLink to="/login" 
                    exact 
                    className="button"  
                    activeClassName="success" >
                    Login
            </NavLink>

            <NavLink to="/calc" 
                    exact 
                    className="button"  
                    activeClassName="success" >
                    Calc
            </NavLink>


            <NavLink to="/counter" 
                    exact 
                    className="button"  
                    activeClassName="success" >
                    Counter
            </NavLink>



            <NavLink to="/contact" 
                    exact 
                    className="button"  
                    activeClassName="success" >
                    Contact
            </NavLink>


            <NavLink to="/about" 
                    exact 
                    className="button"  
                    activeClassName="success" >
                    About
            </NavLink>





            </div>
        )
} 


Header.defaultProps = {
    
}

Header.propTypes = {
    
}