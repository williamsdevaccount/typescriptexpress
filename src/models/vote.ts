import {Model} from "./base";


export default class Vote extends Model{
    private _choice : string;
    private _pollId : string;

    /**
     *
     * @returns {string}
     */
    get choice(): string {
        return this._choice;
    }

    /**
     *
     * @param {string} value
     */
    set choice(value: string) {
        this._choice = value;
    }

    /**
     *
     * @returns {string}
     */
    get pollId(): string {
        return this._pollId;
    }

    /**
     *
     * @param {string} value
     */
    set pollId(value: string) {
        this._pollId = value;
    }

    /**
     *
     * @param id
     * @param {number} created
     * @param {number} updated
     * @param {string} choice
     * @param {string} pollId
     */
    constructor(id: any, created: number, updated: number, choice: string, pollId: string) {
        super(id, created, updated);
        this._choice = choice;
        this._pollId = pollId;
    }
}