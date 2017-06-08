// @flow
import type {State} from "./../component/PingPong/reducer";

// redux types
export type Action = {type: string, [id: string]: mixed};
export type Store = { getState: () => State };
