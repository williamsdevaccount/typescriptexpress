"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config");
app_1.app.listen(config_1.config.port, () => {
    console.log(`Current Environment: ${config_1.config.env}`);
    console.log(`Running Express on Port ${config_1.config.port}, ${Date()}`);
});
//# sourceMappingURL=server.js.map