import {Container} from "inversify";
import TYPES from "./types";
import Game from "./game";

const container = new Container();

export function createContainer(): void {
    container.bind<Game>(TYPES.Game).to(Game);
}

export {container};
