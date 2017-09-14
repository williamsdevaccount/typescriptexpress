"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model(id, created, updated) {
        this._id = id;
        this._created = created;
        this._updated = updated;
    }
    Object.defineProperty(Model.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "created", {
        get: function () {
            return this._created;
        },
        set: function (value) {
            this._created = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "updated", {
        get: function () {
            return this._updated;
        },
        set: function (value) {
            this._updated = value;
        },
        enumerable: true,
        configurable: true
    });
    return Model;
}());
exports.Model = Model;
