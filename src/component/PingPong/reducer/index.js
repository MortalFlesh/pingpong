// @flow
import {combineReducers} from "redux";
import TableStatus from "./../record/tableState";
import PingPongState from "./../record/pingPongState";
import pingPong from "./pingPong";
import table from "./table";

export type State = { table: TableStatus, pingPong: PingPongState };

export default combineReducers({
    pingPong,
    table,
});
