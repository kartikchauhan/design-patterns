import { Clipboard } from "./clipboard";

class Editor {
    private _text: string[];

    constructor(private readonly _clipboard: Clipboard ) {
        this._text = [];
    }

    public write(textItem: string) {
        this._text = this._text.concat(textItem.split(' '));

        textItem.split(' ').forEach(token => {
            this._clipboard.add(token);
        });

        // this._clipboard.read();
    }

    public read(): string {
        return this._text.join(' ');
    }

    public undo() {
        if (this._text.length) {
            this._text.pop();
            this._clipboard.undo();
        }
    }

    public redo(): void {
        const word: string | undefined = this._clipboard.redo();

        if (word) {
            this._text.push(word);
        }
    }
}

const clipboard = new Clipboard();
const editor: Editor = new Editor(clipboard);

// Set 1
editor.write("this is a naive approach to creating a clipboad app");
editor.undo();
editor.undo();
editor.undo();

editor.redo();
editor.write('node.js app');

// Set 2
// editor.undo();
// editor.undo();
// editor.redo();
// editor.redo();

// Set 3
// editor.write('Clipboard');
// editor.redo();
// editor.write('app');
// editor.undo();

console.log(editor.read());