import { ITool } from "./Tool";

export class Canvas {
    private _currentTool: ITool | null;

    constructor() {
        this._currentTool = null;
    }

    public mouseDown() {
        this._currentTool!.mouseDown();
    }

    public mouseUp() {
        this._currentTool!.mouseUp();
    }

    set currentTool(tool: ITool) {
        this._currentTool = tool;
    }

    get currentTool(): ITool {
        return this._currentTool!;
    }
}