// bootstraping

import React from "react";

import {render} from "react-dom";

import App from "./app/App";
import store from './app/store';

//bind virtual dom to real dom

//render => diffing, patching real dom

render( <App />, //virtual dom
        document.getElementById("root") //real dom
)