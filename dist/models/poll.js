"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Poll extends base_1.Model {
    constructor(id, created, updated, title, description) {
        super(id, created, updated);
        this._title = title;
        this._description = description;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
exports.Poll = Poll;
//# sourceMappingURL=poll.js.map