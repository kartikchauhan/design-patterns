import { DataSource } from "./Datasource";
import { Observer } from "./Observer";

export class Chart implements Observer {
    public _id: number = 1;
    private _dataSource: DataSource;

    constructor(id: number, dataSource: DataSource) {
        this._dataSource = dataSource;
        this.id = id;
    }
    
    set id(id: number) {
        this._id = id;
    }

    get id(): number {
        return this._id;
    }
    
    // update(value: number): void { // push style communication
    //     console.log(`Chart updated with value ${value}`);
    // }

    update(): void { // pull style communication
        console.log(`Chart updated with value ${this._dataSource.getValue()}`);
    }
}