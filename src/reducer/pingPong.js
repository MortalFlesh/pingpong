import {PLAY, STOP} from "./../constant/actions";
import * as tableStatus from "./../constant/tableStatus";

const initialState = {
    isPlaying: false,
};

export default (state = initialState, action) => {
    console.log('Reducer<PingPong>:', state, `[${action.type}]`);

    switch (action.type) {
        case PLAY:
            return Object.assign({}, state, {
                tableStatus: tableStatus.PING,
                isPlaying: true,
            });

        case STOP:
            return Object.assign({}, state, {
                isPlaying: false,
            });

        default:
            return state;
    }
};
