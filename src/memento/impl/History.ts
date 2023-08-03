import { EditorState } from "./EditorState";

export class History {
    private _editorStates: EditorState[] = [];

    public push(state: EditorState) {
        this._editorStates.push(state);
    }

    public pop(): EditorState {
        return this._editorStates.pop()!;
    }
}