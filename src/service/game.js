import {injectable} from "inversify";
import {STATUS_PING} from "./../component/PingPong/constant";

@injectable()
export default class Game {
    isPing(status) {
        return status === STATUS_PING;
    }
}
