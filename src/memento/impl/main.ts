import { Editor } from "./Editor";
import { History } from "./History";

class Main {
    constructor(public editor: Editor, public history: History) {
        editor.content = 'a';
        history.push(editor.createState());

        editor.content = 'b';
        history.push(editor.createState());

        history.pop();
        editor.restore(history.pop());

        
        console.log(editor.content);
    }
}

const main = new Main(new Editor(), new History());
