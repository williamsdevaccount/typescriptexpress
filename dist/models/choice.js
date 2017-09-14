"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Choice extends base_1.Model {
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get pollId() {
        return this._pollId;
    }
    set pollId(value) {
        this._pollId = value;
    }
    constructor(id, created, updated, text, pollId) {
        super(id, created, updated);
        this._text = text;
        this._pollId = pollId;
    }
}
exports.Choice = Choice;
//# sourceMappingURL=choice.js.map