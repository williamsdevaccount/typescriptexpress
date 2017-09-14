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
var Vote = /** @class */ (function (_super) {
    __extends(Vote, _super);
    /**
     *
     * @param id
     * @param {number} created
     * @param {number} updated
     * @param {string} choice
     * @param {string} pollId
     */
    function Vote(id, created, updated, choice, pollId) {
        var _this = _super.call(this, id, created, updated) || this;
        _this._choice = choice;
        _this._pollId = pollId;
        return _this;
    }
    Object.defineProperty(Vote.prototype, "choice", {
        /**
         *
         * @returns {string}
         */
        get: function () {
            return this._choice;
        },
        /**
         *
         * @param {string} value
         */
        set: function (value) {
            this._choice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vote.prototype, "pollId", {
        /**
         *
         * @returns {string}
         */
        get: function () {
            return this._pollId;
        },
        /**
         *
         * @param {string} value
         */
        set: function (value) {
            this._pollId = value;
        },
        enumerable: true,
        configurable: true
    });
    return Vote;
}(base_1.Model));
exports.default = Vote;
