import PingPongState from "./../record/pingPongState";
import {PLAY, STOP} from "./../constant/actions";
import * as tableStatus from "./../constant/tableStatus";

const initialState = new PingPongState();

export default (state = initialState, action) => {
    console.log('Reducer<PingPong>:', state, `[${action.type}]`);

    switch (action.type) {
        case PLAY:
            return state.merge({
                tableStatus: tableStatus.PING,
                isPlaying: true,
            });

        case STOP:
            return state.set('isPlaying', false);

        default:
            return state;
    }
};
