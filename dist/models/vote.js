"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Vote extends base_1.Model {
    get choice() {
        return this._choice;
    }
    set choice(value) {
        this._choice = value;
    }
    get pollId() {
        return this._pollId;
    }
    set pollId(value) {
        this._pollId = value;
    }
    constructor(id, created, updated, choice, pollId) {
        super(id, created, updated);
        this._choice = choice;
        this._pollId = pollId;
    }
}
exports.default = Vote;
//# sourceMappingURL=vote.js.map