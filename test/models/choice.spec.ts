import {} from 'jest';
import {Choice} from '../../src/models/choice';


describe('Choice Model test',()=>{
    it('should create valid object properly',()=>{
        let id = 1;
        let created = 1234;
        let updated = 1234;
        let text  = 'blah';
        let pollId = 'dkfdkfkdjf';
        let base = new Choice(id,created,updated,'blah',pollId);
        expect(base).toHaveProperty('_pollId',pollId);
        expect(base).toHaveProperty('_text',text);
    });
});