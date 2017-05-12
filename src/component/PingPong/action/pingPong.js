import {Observable} from "rxjs";
import {PING, PLAY, PONG, ROUND_DURATION, STOP} from "./../constant";
import {getService, TYPES} from "./../../../service";

export function play() {
    return {
        type: PLAY,
    }
}

export function stop() {
    return {
        type: STOP,
    }
}

export const playEpic = (action$, {getState}) =>
    action$.ofType(PLAY)
        .switchMap(() =>
            Observable.interval(ROUND_DURATION)
                .switchMap(() =>
                    getService(TYPES.Game).isPing(getState().table.status)
                        ? Observable.of(1).map(pong)
                        : Observable.of(1).map(ping)
                )
                .takeUntil(action$.ofType(STOP))
        );

function ping() {
    return {
        type: PING,
    }
}

function pong() {
    return {
        type: PONG,
    }
}
