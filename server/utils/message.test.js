// test to check the object we get in return correspond to the parameters passed in.

var expect = require("expect");
var { generateMessage, generateLocationMessage } = require("./message");

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


describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Deb';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA("number");
    expect(message).toInclude({ from, url })
  })
})