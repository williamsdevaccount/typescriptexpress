"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSqliteConnection = (filePath) => {
    return new Sequelize({ storage: filePath, dialect: 'sqlite' });
};
//# sourceMappingURL=sql.js.map