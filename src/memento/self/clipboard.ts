interface IClipboard {
    undo(): void;
    redo(): string | undefined;
};

type Node = {
    next: Node | null;
    previous: Node | null;
    word: string
};

export class Clipboard implements IClipboard {
    private _head: Node | null = null;
    private _current: Node | null = null;
    private _word: string = '';
    
    private _newNode(): Node {
        return {
            next: null,
            previous: null,
            word: this._word
        };
    }

    private _rewrite() {
        this._current = this._current!.next;
        this._current!.word = this._word;
    }

    private _initialize() {
        const node: Node = this._newNode();
        this._head = node;
        this._current = node;
    }

    private _addNode() {
        const node: Node = this._newNode();
        this._current!.next = node;
        node.previous = this._current;
        this._current = node;
    }

    get head(): Node | null {
        return this._head;
    }

    add(word: string) {
        this._word = word;

        // rewrite to an existing node
        if (this._current!== null && this._current.next !== null) { // Rewrite to an existing node. Triggers in case of redo.
            // console.log('this._current!== null && this._current.next !== null');
            this._rewrite();
        } else if (this._current !== null && this._current.next === null) { // Add new word.
            // console.log('this._current !== null && this._current.next === null');
            this._addNode();
        } else if (this._head === null) { // Create first node
            // console.log('this._head === null');
            this._initialize();
        }
    }

    read(): void {
        let current = this._head;

        while(current !== null) {
            console.log(`token => ${current.word}`);
            current = current.next;
        }
    }

    redo(): string | undefined {
        if (this._current === null || this._current.next === null) {
            return undefined;
        }

        this._current = this._current.next;
        
        return this._current.word;
    }

    undo() {
        if (this._current !== null) {
            this._current = this._current.previous;
        }
    }
}