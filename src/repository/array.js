"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var _ = require("lodash");
var ArrayRepository = /** @class */ (function () {
    function ArrayRepository() {
        this.store = new Map();
    }
    ArrayRepository.prototype.id = function () {
        return uuid_1.v4();
    };
    ArrayRepository.prototype.save = function (data) {
        var id = this.id();
        _.set(data, 'id', id);
        this.store.set(id, data);
        return data;
    };
    ArrayRepository.prototype.all = function () {
        return Array.from(this.store.values());
    };
    ArrayRepository.prototype.get = function (id) {
        return this.store.get(id);
    };
    ArrayRepository.prototype.update = function (data, id) {
        this.store.set(id, data);
        return data;
    };
    ArrayRepository.prototype.remove = function (id) {
        return this.store.delete(id);
    };
    return ArrayRepository;
}());
exports.ArrayRepository = ArrayRepository;
