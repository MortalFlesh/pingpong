import "rxjs";
import "core-js/es7";
import "reflect-metadata";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import PingPongApp from "./component/PingPong";
import {configureStore} from "./component/PingPong/store";
import {container, createContainer} from "./service";
import TYPES from "./service/types";

createContainer();

window.TYPES = TYPES;
window.container = container;

const store = configureStore();

render(
    <Provider store={store}>
        <PingPongApp />
    </Provider>,
    document.getElementById('pingpong')
);
