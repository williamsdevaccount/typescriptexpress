"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseFormatter {
    static responseError(res, error) {
        error.status = error.status || 400;
        ResponseFormatter.json(res, error, error.status);
    }
    static responseErrors(res, errors, status = 400) {
        ResponseFormatter.json(res, errors, status);
    }
    static json(res, json, status = 200) {
        res.status(status).json(json);
    }
}
exports.default = ResponseFormatter;
//# sourceMappingURL=responseformatter.js.map