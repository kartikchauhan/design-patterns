import { EditorState } from "./EditorState";

export class Editor {
    private _content: string = '';

    get content(): string {
        return this._content;
    }

    set content(content: string) {
        this._content = content;
    }

    public createState(): EditorState {
        return new EditorState(this.content);
    }

    public restore(editorState: EditorState) {
        this.content = editorState.content();
    }   
}