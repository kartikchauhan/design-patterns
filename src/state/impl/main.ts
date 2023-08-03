import { Canvas } from "./Canvas";
import { SelectionTool } from "./SelectionTool";

class Main {
    public canvas: Canvas;

    constructor() {
        this.canvas = new Canvas();
        this.canvas.currentTool = new SelectionTool();

        this.canvas.mouseDown();
        this.canvas.mouseUp();
    }
}

const main = new Main();