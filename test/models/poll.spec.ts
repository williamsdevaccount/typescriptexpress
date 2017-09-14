import {} from 'jest';
import {Poll} from "../../src/models/poll";

describe('Poll Model test',()=>{
    it('should create valid object properly',()=>{
        let id = 1;
        let created = 1234;
        let updated = 1234;
        let text  = 'blah';
        let pollId = 'dkfdkfkdjf';
        let base = new Poll(id,created,updated,text,pollId);
        expect(base).toHaveProperty('_description',pollId);
        expect(base).toHaveProperty('_title',text);
    });
});