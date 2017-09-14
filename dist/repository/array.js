"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const _ = require("lodash");
class ArrayRepository {
    constructor() {
        this.store = new Map();
    }
    id() {
        return uuid_1.v4();
    }
    save(data) {
        let id = this.id();
        _.set(data, 'id', id);
        this.store.set(id, data);
        return data;
    }
    all() {
        return Array.from(this.store.values());
    }
    get(id) {
        return this.store.get(id);
    }
    update(data, id) {
        this.store.set(id, data);
        return data;
    }
    remove(id) {
        return this.store.delete(id);
    }
}
exports.ArrayRepository = ArrayRepository;
//# sourceMappingURL=array.js.map