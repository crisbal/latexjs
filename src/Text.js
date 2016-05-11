import Block from "./Block";

export class Text extends Block {

  constructor(text) {
    super();

    this.text = text.escaped;
  }

  render() {
    let output = "%s".format(this.text);
    return output;
  }
}

export class Paragraph extends Text {

  render() {
    let output = "\n\n%s\n".format(this.text);
    return output;
  }

}
