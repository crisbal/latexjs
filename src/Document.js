import Block from "./Block";
import Command from "./Command";
import Environment from "./Environment";

export default class Document extends Block {

  constructor(dClass) {
    super();

    this.dClass = dClass;
    this.body = new Environment("document");
  }

  append(...blocks) {
    this.body.append(...blocks);
  }

  render() {
    let head = new Block();
    head.append(new Command("documentclass", [this.dClass]));

    return head.render() + this.body.render();
  }

}
