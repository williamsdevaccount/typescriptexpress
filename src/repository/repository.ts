

export interface Repository<T,I>{
      store : T;
     save(data : I) : I;
     all() : I[];
     get(id : string | number) : I | undefined;
     update(data : I,id? : string | number) : I;
     remove(id : string | number) : boolean;
}