import {Model} from './base';




export default class User extends Model{
    private _username : string;
    private _email : string;
    private _hash : string;
    private _phone : string;


    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get hash(): string {
        return this._hash;
    }

    set hash(value: string) {
        this._hash = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    /**
     *
     * @param id
     * @param {number} created
     * @param {number} updated
     * @param {string} username
     * @param {string} email
     * @param {string} hash
     * @param {string} phone
     */
    constructor(id: any, created: number, updated: number, username: string, email: string, hash: string, phone: string) {
        super(id, created, updated);
        this._username = username;
        this._email = email;
        this._hash = hash;
        this._phone = phone;
    }
}