import LatexObject from "./LatexObject";

export default class Command extends LatexObject{

  constructor(command, args) {
    super();

    this.command = command.escaped;
    this.args = args;
  }


  render() {
    let command = "\n\\%s{%s}".format(this.command, this.args.join(","));
    return command;
  }
}