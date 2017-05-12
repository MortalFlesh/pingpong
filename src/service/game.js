import {STATUS_PING} from "./../component/PingPong/constant";

class Game {
    isPing(status) {
        return status === STATUS_PING;
    }
}

export default Game;
