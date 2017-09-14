"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var poll_1 = require("../../src/models/poll");
describe('Poll Model test', function () {
    it('should create valid object properly', function () {
        var id = 1;
        var created = 1234;
        var updated = 1234;
        var text = 'blah';
        var pollId = 'dkfdkfkdjf';
        var base = new poll_1.Poll(id, created, updated, text, pollId);
        expect(base).toHaveProperty('_description', pollId);
        expect(base).toHaveProperty('_title', text);
    });
});
