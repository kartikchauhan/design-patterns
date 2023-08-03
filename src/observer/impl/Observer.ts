export interface Observer {
    id: number;
    // update(value: number): void; // push style communication
    update(): void; // pull style communication
}