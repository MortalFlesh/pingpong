import {combineEpics} from "redux-observable";
import {playEpic} from "./pingPongActions";
export {play, stop} from "./pingPongActions";

export const rootEpic = combineEpics(
    playEpic,
);
