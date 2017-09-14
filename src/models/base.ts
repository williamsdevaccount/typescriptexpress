
export class Model {
    protected _id: any;
    protected _created: number;
    protected _updated: number;

    constructor(id: any, created: number, updated: number) {
        this._id = id;
        this._created = created;
        this._updated = updated;
    }
    get id(): any {
        return this._id;
    }

    set id(value: any) {
        this._id = value;
    }

    get created(): number {
        return this._created;
    }

    set created(value: number) {
        this._created = value;
    }

    get updated(): number {
        return this._updated;
    }

    set updated(value: number) {
        this._updated = value;
    }
}