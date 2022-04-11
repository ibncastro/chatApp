// test to check the object we get in return correspond to the parameters passed in.

var expect = require("expect");
var { generateMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate the correct message object", () => {
    var from = "Jen";
    var text = "Some message";
    var message = generateMessage(from, text);
    // store response in variable
    // assert from match
    // assert text match
    // assert createdAt is number
    expect(message.createdAt).toBeA("number");
    expect(message).toInclude({ from, text })
  });
});
