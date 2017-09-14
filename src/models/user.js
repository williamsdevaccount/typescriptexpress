"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    /**
     *
     * @param id
     * @param {number} created
     * @param {number} updated
     * @param {string} username
     * @param {string} email
     * @param {string} hash
     * @param {string} phone
     */
    function User(id, created, updated, username, email, hash, phone) {
        var _this = _super.call(this, id, created, updated) || this;
        _this._username = username;
        _this._email = email;
        _this._hash = hash;
        _this._phone = phone;
        return _this;
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "hash", {
        get: function () {
            return this._hash;
        },
        set: function (value) {
            this._hash = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (value) {
            this._phone = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}(base_1.Model));
exports.default = User;
