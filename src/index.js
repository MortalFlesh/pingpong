import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import pingPongReducer from "./reducer/index";
import PingPongApp from "./component/PingPongApp";

const store = createStore(pingPongReducer);

render(
    <Provider store={store}>
        <PingPongApp />
    </Provider>,
    document.getElementById('pingpong')
);
