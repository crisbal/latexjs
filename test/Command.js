import chai from "chai";
let should = chai.should();

import Command from "../src/Command";

describe("Command", () => {

  let command;

  it("should construct", () => {
    command = new Command("test",[]).should.instanceof(Command);
  });

});