import {ArrayRepository} from "../../src/repository/array";
import {Model} from "../../src/models/base";
import {v4} from "uuid";

const newModel = function(){
  return new Model(v4(),1,1);
};
describe('ArrayRepository Test',()=>{
    const globalModel = newModel();
    let repo = null;
    let ids : string[] = [];
    beforeEach(()=>{
       repo = new ArrayRepository<Model>();
       let model = repo.save(newModel());
       ids.push(model.id);
       let otherModel = repo.save(newModel());
       ids.push(otherModel.id);
    });
    afterEach(()=>{
        console.log('after all called');
       repo = null;
       ids = [];
    });
    describe('#save',()=>{
        it('should save properly',()=>{
            let savedModel = repo.save(globalModel);
            expect(savedModel).toBeInstanceOf(Model);
            expect(savedModel).toEqual(globalModel);
        });
    });
    describe('#all',()=>{
        it('should fetch all properly',()=>{
            console.log(JSON.stringify(repo.all()));
            expect(repo.all().length).toEqual(2);
        });
    });
    describe('#get',()=>{
        it('should fetch one properly',()=>{
            console.log(ids[0]);
            expect(repo.get(ids[0])).toBeDefined();
        });
    });
    describe('#update',()=>{
        it('should update properly',()=>{
            let model = repo.get(ids[0]);
            let update = 100;
            model.updated = update;
            let updated  = repo.update(model,model.id);
            expect(updated.updated).toEqual(update);
        });
    });
    describe('#delte',()=>{
        it('should delete properly',()=>{
            expect(repo.remove(ids[0])).toBeTruthy();
            expect(repo.remove(ids[0])).toBeFalsy();
        });
    });
});