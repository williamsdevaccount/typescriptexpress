"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
__export(require("./container"));
__export(require("./debugger"));
__export(require("./responseformatter"));
exports.generateID = () => {
    return uuid_1.v4();
};
//# sourceMappingURL=index.js.map