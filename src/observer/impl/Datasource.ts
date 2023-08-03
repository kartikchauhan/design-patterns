import { Subject } from "./Subject";

export class DataSource extends Subject {
    private _value: number = Infinity;

    constructor() {
        super();
    }

    get value(): number {
        return this._value;
    }

    set value(val: number) {
        this._value = val;
        this.notifyObservers();
    }
}