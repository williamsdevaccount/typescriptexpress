"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../../src/models/base");
describe('Model basic test', function () {
    it('should create valid object properly', function () {
        var id = 1;
        var created = 1234;
        var updated = 1234;
        var base = new base_1.Model(id, created, updated);
        expect(base).toHaveProperty('_id', id);
        expect(base).toHaveProperty('_created', created);
        expect(base).toHaveProperty('_updated', updated);
    });
});
