import {combineEpics} from "redux-observable";
import {playEpic} from "./pingPong";
export {play, stop} from "./pingPong";

export const rootEpic = combineEpics(
    playEpic,
);
