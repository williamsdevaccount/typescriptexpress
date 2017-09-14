import { Repository } from "./repository";
export declare class ArrayRepository<T> implements Repository<Map<string, T>, T> {
    store: Map<string, T>;
    constructor();
    id(): string;
    save(data: T): T;
    all(): T[];
    get(id: string): T | undefined;
    update(data: T, id: string): T;
    remove(id: string): boolean;
}
