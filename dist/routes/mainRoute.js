"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const mainRoute = express_1.Router();
exports.mainRoute = mainRoute;
mainRoute.get('/', controllers_1.mainCtrl.render);
//# sourceMappingURL=mainRoute.js.map