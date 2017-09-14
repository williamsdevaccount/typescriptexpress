export interface IConfig {
    env: string;
    port: number;
    cwd: string;
    path?: string;
}
export declare const config: IConfig;
