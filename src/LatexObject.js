import "./Util"

export default class LatexObject {

    constructor() {
        this.newLineBefore = false;
        this.newLineAfter = true;

        this.isEscaped = true;

        this.content = [];
    }


    render() {
        let body = ""

        for (const object of this.content) {
            body += object.render();
        } 

        return body;
    }


    append(...args) {
        for(const latexObject of args)
            this.content.push(latexObject);
    }

}