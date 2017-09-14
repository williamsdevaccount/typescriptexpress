import { Model } from "./base";
export default class Vote extends Model {
    private _choice;
    private _pollId;
    choice: string;
    pollId: string;
    constructor(id: any, created: number, updated: number, choice: string, pollId: string);
}
