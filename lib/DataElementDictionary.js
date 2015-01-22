/* (c) 2015 Chris Hafey */

import standardDataElements from './standardDataElements';

export default class DataElementDictionary {
    constructor() {
    }

    // lookup element by tag
    lookup(tag) {
        return standardDataElements[tag];
    }

    // iterator for the entries in the data dictionary
    [Symbol.iterator]() {
    return function* (obj) {
        for (let key of Object.keys(obj)) {
            yield [key, obj[key]];
        }
    }(standardDataElements);
}
}