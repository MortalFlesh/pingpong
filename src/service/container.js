import {Container} from "inversify";
import {helpers} from "inversify-vanillajs-helpers";
import TYPES from "./types";
import Game from "./game";

let container = {};

export function createContainer() {
    container = new Container();
    const register = helpers.register(container);

    register(TYPES.Game)(Game);
}

export {container};
