import { Observer } from "./Observer";

export class Spreadsheet implements Observer {
    public _id: number = 1;

    constructor(id: number) {
        this.id = id;
    }

    set id(id: number) {
        this._id = id;
    }

    get id(): number {
        return this._id;
    }

    public update(value: number): void {
        console.log(`Spreadsheet updated with value ${value}`);
    }
}