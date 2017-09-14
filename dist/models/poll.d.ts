import { Model } from "./base";
export declare class Poll extends Model {
    private _title;
    private _description;
    constructor(id: any, created: number, updated: number, title: string, description: string);
    title: string;
    description: string;
}
