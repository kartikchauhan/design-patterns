import { Observer } from "./Observer";

export class Subject {
    public observers: Observer[] = [];

    public addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer) {
        for (let i=0; i<this.observers.length; i++) {
            
            if (this.observers[i].id === observer.id) {
                this.observers.splice(i, 1);
            }
        }
    }

    // public notifyObservers(value: number) { // push style communication
    //     for (let observer of this.observers) {
    //         observer.update(value);
    //     }
    // }

    public notifyObservers() { // pull style communication
        for (let observer of this.observers) {
            observer.update();
        }
    }
}