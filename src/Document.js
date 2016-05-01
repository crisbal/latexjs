import LatexObject from "./LatexObject";
import Command from "./Command";
import Environment from "./Environment";

export default class Document extends LatexObject{

    constructor(dClass) {
        super();

        this.dClass = dClass;
        this.body = new Environment("document") 
    }

    append(...latexObjects) {
        this.body.append(...latexObjects);
    }

    render() {
        let head = new LatexObject();
        head.append(new Command("documentclass",[this.dClass]));

        return head.render() + this.body.render();
    }

}