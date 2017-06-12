// @flow
import type {Action} from "./../../../flow/types";

import PingPongState from "./../record/pingPongState";
import {PLAY, STOP} from "./../constant";

const initialState = new PingPongState();

export default (state: PingPongState = initialState, action: Action): PingPongState => {
    switch (action.type) {
        case PLAY:
            return state.set('isPlaying', true);

        case STOP:
            return state.set('isPlaying', false);

        default:
            return state;
    }
};
