import winston from 'winston';

export default class Debugger{
    static getDebuggerInstance(name = 'debug') : object{
        return winston;
    }
}