export default class Container {
    private _services;
    private _singletons;
    constructor();
    register(name: string, definition: any, dependencies?: string[]): void;
    singleton(name: string, definition: any, dependencies?: string[]): void;
    get(name: string): any;
    _getResolvedDependencies(service: any): any;
    _createInstance(service: any): any;
    _isClass(definition: any): boolean;
}
