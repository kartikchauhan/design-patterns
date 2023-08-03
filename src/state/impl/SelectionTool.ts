import { ITool } from "./Tool";

export class SelectionTool implements ITool {
    
    public mouseDown(): void {
        console.log(`Selection tool selected`);
    }

    public mouseUp(): void {
        console.log(`Draw Rectangle`);
    }
}