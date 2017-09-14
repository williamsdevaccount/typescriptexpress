



export default class Container{
    private _services : Map<string,any>;
    private _singletons : Map<string,any>;

    constructor(){
        this._services = new Map();
        this._singletons = new Map();
    }

    /**
     *
     * @param {string} name
     * @param definition
     * @param {string[]} dependencies
     */
    register(name : string,definition : any,dependencies? : string[]){
       this._services.set(name,{definition : definition,dependencies : dependencies});
    }
    singleton(name : string,definition : any,dependencies? : string[]){
        this._singletons.set(name,{definition : definition,dependencies : dependencies,singleton : true});
    }
    get(name : string) : any{
        const c : any = this._services.get(name);

        if(this._isClass(c.definition)) {

            if(c.singleton) {
                const singletonInstance = this._singletons.get(name);
                if(singletonInstance) {
                    return singletonInstance;
                } else {
                    const newSingletonInstance = this._createInstance(c);
                    this._singletons.set(name, newSingletonInstance);
                    return newSingletonInstance;
                }
            }

            return this._createInstance(c);

        } else {
            return c.definition;
        }
    }
    _getResolvedDependencies(service : any) : any {
        let classDependencies = [];
        if(service.dependencies) {
            classDependencies = service.dependencies.map((dep : any) => {
                return this.get(dep);
            });
        }
        return classDependencies;
    }

    _createInstance(service : any) : any{
        return new service.definition(...this._getResolvedDependencies(service))
    }

    _isClass(definition : any) : boolean {
        return typeof definition === 'function'
    }
}