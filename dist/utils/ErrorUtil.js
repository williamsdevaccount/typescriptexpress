"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Err extends Error {
    constructor(message, status, code) {
        super(message);
        this.message = message;
        this.status = status;
        this.code = code;
    }
}
exports.Err = Err;
//# sourceMappingURL=ErrorUtil.js.map