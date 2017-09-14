"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MainCtrl {
    constructor() {
        this.render = (req, res) => {
            res.render('index', { content: 'Hello, world!' });
        };
    }
}
exports.MainCtrl = MainCtrl;
exports.mainCtrl = new MainCtrl();
//# sourceMappingURL=MainCtrl.js.map