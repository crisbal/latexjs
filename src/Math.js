import Block from "./Block";

export class InlineMath extends Block {

  constructor(math) {
    super();

    this.math = math;
  }

  render() {
    let command = "$%s$".format(this.math);
    return command;
  }
}

export class DisplayMath extends Math {

  render() {
    let command = "\n$$%s$$".format(this.math);
    return command;
  }
}
