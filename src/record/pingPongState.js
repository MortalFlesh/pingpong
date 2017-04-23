import {Record} from "immutable";
import {STOP} from "./../constant/tableStatus";

export default new Record({
    tableStatus: STOP,
    isPlaying: false,
});
