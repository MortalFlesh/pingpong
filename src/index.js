import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import pingPongApp from "./reducer";
import PingPongApp from "./component/PingPong";

const store = createStore(pingPongApp);

render(
    <Provider store={store}>
        <PingPongApp />
    </Provider>,
    document.getElementById('pingpong')
);
