export declare class Err extends Error {
    message: string;
    status: number | undefined;
    code: number | undefined;
    constructor(message: string, status?: number | undefined, code?: number | undefined);
}
