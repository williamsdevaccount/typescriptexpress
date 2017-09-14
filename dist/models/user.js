"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class User extends base_1.Model {
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get hash() {
        return this._hash;
    }
    set hash(value) {
        this._hash = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    constructor(id, created, updated, username, email, hash, phone) {
        super(id, created, updated);
        this._username = username;
        this._email = email;
        this._hash = hash;
        this._phone = phone;
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map