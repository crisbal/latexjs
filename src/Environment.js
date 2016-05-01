import LatexObject from "./LatexObject";
import Command from "./Command";

export default class Environment extends LatexObject{

    constructor(name) {
        super();

        this.name = name;
    }

    render() {
        let begin = new Command("begin",[this.name]).render();

        let middle = ""

        for (const object of this.content) {
            middle += object.render();
        } 

        let end = new Command("end",[this.name]).render() + "\n";

        return (begin + middle + end)
    }
}