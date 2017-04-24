import "rxjs";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import PingPongApp from "./component/PingPong";
import configureStore from "./store/configureStore";

const store = configureStore();

render(
    <Provider store={store}>
        <PingPongApp />
    </Provider>,
    document.getElementById('pingpong')
);
