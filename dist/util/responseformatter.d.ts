/// <reference types="express" />
import { Response } from "express";
export interface APIError {
    message: string;
    status?: number;
    code?: number;
    method?: string;
    path?: string;
}
export default class ResponseFormatter {
    static responseError(res: Response, error: APIError): void;
    static responseErrors(res: Response, errors: APIError[], status?: number): void;
    static json(res: Response, json: object, status?: number): void;
}
