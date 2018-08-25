// bootstraping

// any changes on data, we should have @action 
import { configure } from 'mobx';
configure({
    enforceActions: true
});

import React from "react";

import {render} from "react-dom";

import App from "./app/App";
import store from './app/store';


import {Provider} from 'mobx-react';

//bind virtual dom to real dom

//render => diffing, patching real dom

render( <Provider {...store}>
                <App />
        </Provider>, 
        document.getElementById("root") //real dom
)