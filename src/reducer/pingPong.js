import PingPongState from "./../record/pingPongState";
import {PLAY, STOP} from "./../constant/actions";

const initialState = new PingPongState();

export default (state = initialState, action) => {
    console.log('Reducer<PingPong>:', state.toJS(), `[${action.type}]`);

    switch (action.type) {
        case PLAY:
            return state.set('isPlaying', true);

        case STOP:
            return state.set('isPlaying', false);

        default:
            return state;
    }
};
