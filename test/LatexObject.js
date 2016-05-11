import chai from "chai";
let should = chai.should();

import LatexObject from "../src/LatexObject";

describe("LatexObject", () => {

  let latexObject;

  beforeEach(() => {
    latexObject = new LatexObject();
  });

  it("should have empty content", () => {
    latexObject.content.should.length(0);
  });

  it("should render as an empty string", () => {
    latexObject.render().should.equal("");
  });

  it("should allow adding of content", () => {
    let tmpObject = new LatexObject();
    latexObject.append(tmpObject);

    latexObject.content.should.length(1);
  });

});
