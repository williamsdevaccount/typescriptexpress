import {Response} from "express";

export interface APIError{
    message : string;
    status? : number;
    code? : number;
    method? : string;
    path? : string;
}


export default class ResponseFormatter{
    static responseError(res : Response,error : APIError) : void{
        error.status = error.status || 400;
        ResponseFormatter.json(res,error,error.status);
    }
    static responseErrors(res : Response,errors : APIError[],status = 400){
        ResponseFormatter.json(res,errors,status);
    }
    static json(res : Response,json : object,status = 200) : void{
        res.status(status).json(json);
    }

}