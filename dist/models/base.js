"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    constructor(id, created, updated) {
        this._id = id;
        this._created = created;
        this._updated = updated;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get created() {
        return this._created;
    }
    set created(value) {
        this._created = value;
    }
    get updated() {
        return this._updated;
    }
    set updated(value) {
        this._updated = value;
    }
}
exports.Model = Model;
//# sourceMappingURL=base.js.map