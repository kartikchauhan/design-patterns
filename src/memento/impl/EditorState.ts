export class EditorState {
    private _content: string;

    constructor(content: string) {
        this._content = content;
    }

    public content() {
        return this._content;
    }
}