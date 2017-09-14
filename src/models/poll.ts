import {Model} from "./base";


export class Poll extends Model{
    private _title : string;
    private _description : string;

    /**
     *
     * @param id
     * @param {number} created
     * @param {number} updated
     * @param {string} title
     * @param {string} description
     */
    constructor(id: any, created: number, updated: number, title: string, description: string) {
        super(id, created, updated);
        this._title = title;
        this._description = description;
    }

    /**
     *
     * @returns {string}
     */
    get title(): string {
        return this._title;
    }

    /**
     *
     * @param {string} value
     */
    set title(value: string) {
        this._title = value;
    }

    /**
     *
     * @returns {string}
     */
    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}