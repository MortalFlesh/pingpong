import {combineReducers} from "redux";
import pingPong from "./pingPong";
import table from "./table";

export default combineReducers({
    pingPong,
    table,
});
