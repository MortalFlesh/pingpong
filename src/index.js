import "rxjs";
import "core-js/es7";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createContainer} from "./service/container";

import PingPongApp from "./component/PingPong";
import {configureStore} from "./component/PingPong/store";

createContainer();
const store = configureStore();

render(
    <Provider store={store}>
        <PingPongApp />
    </Provider>,
    document.getElementById('pingpong')
);
