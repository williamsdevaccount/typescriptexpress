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
var Poll = /** @class */ (function (_super) {
    __extends(Poll, _super);
    /**
     *
     * @param id
     * @param {number} created
     * @param {number} updated
     * @param {string} title
     * @param {string} description
     */
    function Poll(id, created, updated, title, description) {
        var _this = _super.call(this, id, created, updated) || this;
        _this._title = title;
        _this._description = description;
        return _this;
    }
    Object.defineProperty(Poll.prototype, "title", {
        /**
         *
         * @returns {string}
         */
        get: function () {
            return this._title;
        },
        /**
         *
         * @param {string} value
         */
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Poll.prototype, "description", {
        /**
         *
         * @returns {string}
         */
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    return Poll;
}(base_1.Model));
exports.Poll = Poll;
