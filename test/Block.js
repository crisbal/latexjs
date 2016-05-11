import chai from "chai";
let should = chai.should();

import Block from "../src/Block";

describe("Block", () => {

  let block;

  beforeEach(() => {
    block = new Block();
  });

  it("should have empty content", () => {
    block.content.should.length(0);
  });

  it("should render as an empty string", () => {
    block.render().should.equal("");
  });

  it("should allow adding of content", () => {
    let tmpObject = new Block();
    block.append(tmpObject);

    block.content.should.length(1);
  });

});
