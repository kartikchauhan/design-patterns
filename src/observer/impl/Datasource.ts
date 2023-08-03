import { Subject } from "./Subject";

export class DataSource extends Subject {
    private value: number = Infinity;

    constructor() {
        super();
    }

    getValue(): number {
        return this.value;
    }

    setValue(val: number) {
        this.value = val;

        // this.notifyObservers(this._value); // push style communication
        this.notifyObservers();
    } 
}