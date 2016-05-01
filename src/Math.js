import LatexObject from "./LatexObject";

export class Math extends LatexObject{

    constructor(math) {
        super();

        this.math = math;
    }


    render() {
        let command = "$%s$".format(this.math);
        return command;
    }
}

export class DisplayMath extends Math{

    render() {
        let command = "\n$$%s$$".format(this.math);
        return command;
    }
}