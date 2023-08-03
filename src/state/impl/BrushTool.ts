import { ITool } from "./Tool";

export class BrushTool implements ITool {
    
    public mouseDown(): void {
        console.log(`Brush tool selected`);
    }

    public mouseUp(): void {
        console.log(`Draw line`);
    }
}