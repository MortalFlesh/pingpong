import {container} from './container';
import TYPES from './types';

export {
    TYPES,
};

export function getService(service) {
    return container.get(service);
}
