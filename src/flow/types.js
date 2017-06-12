// @flow
import type {State} from "./../component/PingPong/reducer";

// redux types
export type Action = { +type: string, [id: string]: any };
export type Store = { getState: () => State };
