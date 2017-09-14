"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    env: process.env.NODE_ENV || 'localhost',
    port: process.env.PORT || 8000,
    cwd: process.cwd()
};
switch (exports.config.env) {
    case 'localhost':
        Object.assign(exports.config, {
            path: '/local/'
        });
        break;
    case 'development':
        Object.assign(exports.config, {});
        break;
    case 'production':
        Object.assign(exports.config, {});
        break;
    default:
        process.exit(1);
        break;
}
//# sourceMappingURL=config.js.map