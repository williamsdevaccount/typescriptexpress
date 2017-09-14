import { Model } from './base';
export declare class Choice extends Model {
    _text: string;
    _pollId: string;
    text: string;
    pollId: string;
    constructor(id: any, created: number, updated: number, text: string, pollId: string);
}
