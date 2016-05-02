import LatexObject from "./LatexObject";

export class Text extends LatexObject{

  constructor(text) {
    super();

    this.text = text;
  }


  render() {
    let output = "%s".format(this.text);
    return output;
  }
}

export class Paragraph extends Text{ 

  render() {
    let output = "\n\n%s\n".format(this.text);
    return output;
  }

}