import TableState from "./../record/tableState";
import {PING, PLAY, PONG} from "./../constant/actions";
import * as tableStatus from "./../constant/tableStatus";

const initialState = new TableState();

export default (state = initialState, action) => {
    console.log('Reducer<Table>:', state.toJS(), `[${action.type}]`);

    switch (action.type) {
        case PLAY:
            return state.set('status', tableStatus.PLAY);

        case PING:
            return state.set('status', tableStatus.PING);

        case PONG:
            return state.set('status', tableStatus.PONG);

        default:
            return state;
    }
};
