"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = require("../../src/repository/array");
var base_1 = require("../../src/models/base");
var uuid_1 = require("uuid");
var newModel = function () {
    return new base_1.Model(uuid_1.v4(), 1, 1);
};
describe('ArrayRepository Test', function () {
    var globalModel = newModel();
    var repo = null;
    var ids = [];
    beforeEach(function () {
        repo = new array_1.ArrayRepository();
        var model = repo.save(newModel());
        ids.push(model.id);
        var otherModel = repo.save(newModel());
        ids.push(otherModel.id);
    });
    afterEach(function () {
        console.log('after all called');
        repo = null;
        ids = [];
    });
    describe('#save', function () {
        it('should save properly', function () {
            var savedModel = repo.save(globalModel);
            expect(savedModel).toBeInstanceOf(base_1.Model);
            expect(savedModel).toEqual(globalModel);
        });
    });
    describe('#all', function () {
        it('should fetch all properly', function () {
            console.log(JSON.stringify(repo.all()));
            expect(repo.all().length).toEqual(2);
        });
    });
    describe('#get', function () {
        it('should fetch one properly', function () {
            console.log(ids[0]);
            expect(repo.get(ids[0])).toBeDefined();
        });
    });
    describe('#update', function () {
        it('should update properly', function () {
            var model = repo.get(ids[0]);
            var update = 100;
            model.updated = update;
            var updated = repo.update(model, model.id);
            expect(updated.updated).toEqual(update);
        });
    });
    describe('#delte', function () {
        it('should delete properly', function () {
            expect(repo.remove(ids[0])).toBeTruthy();
            expect(repo.remove(ids[0])).toBeFalsy();
        });
    });
});
