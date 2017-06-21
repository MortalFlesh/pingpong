// @flow
import type {State} from "./../reducer";
import type {Action, Store} from "../../../flow/type";

import {Observable} from "rxjs";
import {PING, PLAY, PONG, ROUND_DURATION, STATUS_PING, STOP} from "./../constant";

export function play(): Action {
    return {
        type: PLAY,
    }
}

export function stop(): Action {
    return {
        type: STOP,
    }
}

export const playEpic = (action$: Observable, {getState}: Store): Observable =>
    action$.ofType(PLAY)
        .switchMap(() =>
            Observable.interval(ROUND_DURATION)
                .map(() => isPing(getState) ? pong() : ping())
                .takeUntil(action$.ofType(STOP))
        );

function isPing(getState: () => State): boolean {
    return getState().table.status === STATUS_PING;
}

function ping(): Action {
    return {
        type: PING,
    }
}

function pong(): Action {
    return {
        type: PONG,
    }
}
