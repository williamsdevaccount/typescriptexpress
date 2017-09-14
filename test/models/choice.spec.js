"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var choice_1 = require("../../src/models/choice");
describe('Choice Model test', function () {
    it('should create valid object properly', function () {
        var id = 1;
        var created = 1234;
        var updated = 1234;
        var text = 'blah';
        var pollId = 'dkfdkfkdjf';
        var base = new choice_1.Choice(id, created, updated, 'blah', pollId);
        expect(base).toHaveProperty('_pollId', pollId);
        expect(base).toHaveProperty('_text', text);
    });
});
