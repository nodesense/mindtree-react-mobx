import React, {Component} from "react";
import PropTypes from "prop-types";

import {observable, autorun, action} from 'mobx';

class CounterState {
    @observable
    counter = 0;
}

const counterState = new CounterState;


export default class Counter extends Component {
    constructor(props) {
        super(props);
    }
    
    
    @action
    increment = () => {
        // mutation
        // NOT recommended, violate single responsiblity
        counterState.counter++;
    }

    reset = () => {
        //FIXME: check not working
        action.bound( () => {
            counterState.counter = 0;
        })
    }

    componentDidMount() {
        this.disposerFn = autorun( () => {
            console.log('counter autorun', 
                        counterState.counter);
            this.forceUpdate();
        })

        this.timer = setInterval( () => {
            this.increment()
        }, 5000);
    }

    componentWillUnmount() {
        // stop the auto run
        this.disposerFn();

        clearInterval(this.timer);
    }
    
    render() {
        console.log("Counter render")
        return (
            <div> 
            <h2>Counter</h2>
            <p>{counterState.counter}</p>

            <button onClick={this.increment}>
             +1
            </button>

            <button onClick={this.reset}>
             Reset
            </button>
            
            </div>
        )
    }
} 


Counter.defaultProps = {
    
}

Counter.propTypes = {
    
}