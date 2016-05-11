import Block from "./Block";

export default class Command extends Block {

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
