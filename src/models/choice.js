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
var Choice = /** @class */ (function (_super) {
    __extends(Choice, _super);
    /**
     *
     * @param id
     * @param created
     * @param updated
     * @param text
     * @param pollId
     */
    function Choice(id, created, updated, text, pollId) {
        var _this = _super.call(this, id, created, updated) || this;
        _this._text = text;
        _this._pollId = pollId;
        return _this;
    }
    Object.defineProperty(Choice.prototype, "text", {
        /**
         *
         * @returns {string}
         */
        get: function () {
            return this._text;
        },
        /**
         *
         * @param {string} value
         */
        set: function (value) {
            this._text = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Choice.prototype, "pollId", {
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
    return Choice;
}(base_1.Model));
exports.Choice = Choice;
