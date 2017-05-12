import {Container} from "inversify";
import TYPES from "./types";
import Game from "./game";

const container = new Container();

export function createContainer() {
    container.bind(TYPES.Game).to(Game);
}

export {container};
