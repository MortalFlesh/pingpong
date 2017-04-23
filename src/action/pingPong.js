import {PLAY, STOP} from './../constant/actions';

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
