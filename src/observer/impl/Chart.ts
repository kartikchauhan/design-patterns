import { Observer } from "./Observer";

export class Chart implements Observer {
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
    
    update(): void {
        console.log(`Chart updated`);
    }
}