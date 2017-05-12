import {STATUS_PING} from "./../component/PingPong/constant";

export default class Game {
    isPing(status) {
        return status === STATUS_PING;
    }
}
