import {} from 'jest';
import {Model} from "../../src/models/base";



describe('Model basic test',()=>{
   it('should create valid object properly',()=>{
      let id = 1;
      let created = 1234;
      let updated = 1234;
     let base = new Model(id,created,updated);
     expect(base).toHaveProperty('_id',id);
     expect(base).toHaveProperty('_created',created);
     expect(base).toHaveProperty('_updated',updated);
   });
});