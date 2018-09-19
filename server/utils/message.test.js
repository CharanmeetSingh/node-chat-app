const expect = require('expect');
let {generateMessage} = require('./message');
describe('generateMessage', () => {
    it('should generate the correct messagen object', () => {
        let from = "Julia";
        let text = "Hie honey!";
        let messageObj = generateMessage(from, text);
        expect(messageObj.from).toBe(from);
        expect(messageObj.text).toBe(text);
        expect(typeof messageObj.createdAt).toBe("number");
    });
});