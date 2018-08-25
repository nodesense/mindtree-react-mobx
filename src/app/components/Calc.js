
import React, {Component} from "react";
import PropTypes from "prop-types";

import {inject, observer} from 'mobx-react';

// inject shall inject calculator (from store.js)
// as props, this.props.calculator.add
// @inject will create higher order component/container
@inject('calculator') 
@observer // watch render function with observable
export default class Calc extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
          
    }

    add = () => {
        this.props
            .calculator
            .add(Math.ceil(Math.random() * 100))
    }

    empty = () => {
        this.props.calculator.empty();
    }

    pop = () => {
        // will fail with strict actions enforced
        // this.props.calculator.numbers.pop();

        this.props.calculator.pop();
    }
    
    render() {
        console.log('Calc render');
        return (
            <div> 
            <h2>Calc {this.props.calculator.numbers.length}</h2>
            <button onClick={this.add}>
                Add
            </button>

            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.pop}>
                Pop
            </button>

            <ul>
                {
                    this.props.calculator
                    .numbers.map ( (n, index) => (
                        <li key={index}>
                            {n}
                        </li>
                    ))
                }
            </ul>

            <p>Sum: {this.props.calculator.sum}</p>
            <p>Total: {this.props.calculator.sum}</p>
            <p>Min: {this.props.calculator.min}</p>
            <p>Avg: {this.props.calculator.avg}</p>

            </div>
        )
    }
} 


Calc.defaultProps = {
    
}

Calc.propTypes = {
    
}