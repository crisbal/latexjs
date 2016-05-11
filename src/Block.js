import "./Utils";

export default class Block {

  constructor() {
    this.content = [];
  }

  render() {
    let body = "";

    for (const block of this.content) {
      body += block.render();
    }

    return body;
  }

  append(...blocks) {
    for (const block of blocks) {
      this.content.push(block);
    }
  }

}
