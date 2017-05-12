import {inject} from "./ioc";
import {STATUS_PING} from "./../component/PingPong/constant";

class Game {
    isPing(status) {
        return status === STATUS_PING;
    }
}
inject(Game);

export default Game;
