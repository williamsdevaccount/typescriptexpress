import {Model} from './base';


export class Choice extends Model {
    _text : string;
    _pollId : string;

    /**
     *
     * @returns {string}
     */
    get text(): string {
        return this._text;
    }

    /**
     *
     * @param {string} value
     */
    set text(value: string) {
        this._text = value;
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
     * @param created
     * @param updated
     * @param text
     * @param pollId
     */
    constructor(id: any, created: number, updated: number, text: string, pollId: string) {
        super(id, created, updated);
        this._text = text;
        this._pollId = pollId;
    }
}