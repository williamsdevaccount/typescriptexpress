import { Model } from './base';
export default class User extends Model {
    private _username;
    private _email;
    private _hash;
    private _phone;
    username: string;
    email: string;
    hash: string;
    phone: string;
    constructor(id: any, created: number, updated: number, username: string, email: string, hash: string, phone: string);
}
