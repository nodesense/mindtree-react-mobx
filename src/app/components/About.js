import React, {Component} from "react";
import PropTypes from "prop-types";

import {observable, action} from 'mobx';

// running autorun, disposer funcs
import {observer} from 'mobx-react';
 
class AboutState {
    @observable
    counter = 0;

    @action
    increment() {
        this.counter++
    }

    @action
    reset() {
        this.counter = 0
    }
}

const aboutState = new AboutState;

// automatically do autorun on render variables
 @observer
 export default class About extends Component {
    constructor(props) {
        super(props);
    }
    
    increment = () => {
        // mutation
        //BAD
        //aboutState.counter++;
        //Good
        aboutState.increment();
    }

    reset = () => {
        //BAD
        // aboutState.counter = 0;
        aboutState.reset()
    }

    componentDidMount() {
        this.timer = setInterval( () => {
            this.increment()
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    render() {
        console.log("About render")
 
        return (
            <div> 
            <h2>About</h2>
            <p>{aboutState.counter}</p>

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


About.defaultProps = {
    
}

About.propTypes = {
    
}