import {Repository} from "./repository";
import {v4} from 'uuid';
import * as _ from 'lodash';

export class ArrayRepository<T> implements Repository<Map<string,T>,T>{

     store : Map<string,T>;
    constructor() {
        this.store = new Map();
    }
    id (){
        return v4();
    }
    save(data : T) : T{
        let id  = this.id();
        _.set(data,'id',id);
        this.store.set(id,data);
        return data;
    }
    all () : T[]{
        return Array.from(this.store.values());
    }
    get(id : string) : T | undefined{
        return this.store.get(id);
    }
    update(data : T,id : string) : T{
        this.store.set(id,data);
        return data;
    }
    remove(id : string) : boolean{
        return this.store.delete(id);
    }

}