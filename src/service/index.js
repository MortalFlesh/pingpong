import Game from "./game";

let container = {};

export function createContainer() {
    return container = {
        game: new Game(),
    };
}

export function getService(service) {
    if (!container.hasOwnProperty(service)) {
        throw `Service ${service} is not in container!`;
    }

    return container[service];
}
