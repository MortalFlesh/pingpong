import {Observable} from "rxjs";
import {PING, PLAY, PONG, STOP} from "./../constant/actions";
import * as tableStatus from "./../constant/tableStatus";
import {ROUND_DURATION} from "./../constant/game";

export function play() {
    console.log('Action<Play>()');
    return {
        type: PLAY,
    }
}

export function stop() {
    console.log('Action<Stop>()');
    return {
        type: STOP,
    }
}

export const playEpic = (action$, {getState}) =>
    action$.ofType(PLAY)
        .switchMap(() => {
            console.log('Epic<Play>.startGame()');

            return Observable.interval(ROUND_DURATION)
                .switchMap(() =>
                    getState().table.status === tableStatus.PING
                        ? Observable.of(1).map(pong)
                        : Observable.of(1).map(ping)
                )
                .takeUntil(action$.ofType(STOP));
        });

function ping() {
    console.log('Action<Ping>()');
    return {
        type: PING,
    }
}

function pong() {
    console.log('Action<Pong>()');
    return {
        type: PONG,
    }
}
