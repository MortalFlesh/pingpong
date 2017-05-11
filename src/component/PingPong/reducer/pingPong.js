import PingPongState from "./../record/pingPongState";
import {PLAY, STOP} from "./../constant";

const initialState = new PingPongState();

export default (state = initialState, action) => {
    switch (action.type) {
        case PLAY:
            return state.set('isPlaying', true);

        case STOP:
            return state.set('isPlaying', false);

        default:
            return state;
    }
};
