import {combineEpics} from "redux-observable";
import {play, playEpic, stop} from "./pingPong";

const rootEpic = combineEpics(
    playEpic,
);

export {
    play,
    stop,
    rootEpic,
};
