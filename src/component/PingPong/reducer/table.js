// @flow
import type {Action} from "./../../../flow/types";

import TableState from "./../record/tableState";
import {PING, PLAY, PONG, STATUS_PING, STATUS_PLAY, STATUS_PONG} from "./../constant";

const initialState = new TableState();

export default (state: TableState = initialState, action: Action): TableState => {
    switch (action.type) {
        case PLAY:
            return state.set('status', STATUS_PLAY);

        case PING:
            return state.set('status', STATUS_PING);

        case PONG:
            return state.set('status', STATUS_PONG);

        default:
            return state;
    }
};
