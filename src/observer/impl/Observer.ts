export interface Observer {
    id: number;
    update(value: number): void;
}