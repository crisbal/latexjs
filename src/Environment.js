import Block from "./Block";
import Command from "./Command";

export default class Environment extends Block {

  constructor(name) {
    super();

    this.name = name;
  }

  render() {
    let begin = new Command("begin", [this.name]).render();

    let middle = "";

    for (const object of this.content) {
      middle += object.render();
    }

    let end = new Command("end", [this.name]).render() + "\n";

    return (begin + middle + end);
  }
}
