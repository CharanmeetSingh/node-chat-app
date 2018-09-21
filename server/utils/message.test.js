const expect = require('expect');
let {generateMessage, generateLocation} = require('./message');
describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        let from = "Julia";
        let text = "Hie honey!";
        let messageObj = generateMessage(from, text);
        expect(messageObj.from).toBe(from);
        expect(messageObj.text).toBe(text);
        expect(typeof messageObj.createdAt).toBe("number");
    });
});

describe('generateLocation', () => {
    it('should generate the correct location object', () => {
        let from = "Admin";
        let lat = 1;
        let long = 1;
        let locationObj = generateLocation(from, lat, long);
        expect(locationObj.from).toBe(from);
        expect(locationObj.url).toBe(`https://google.com/maps?${lat},${long}`);
        expect(typeof locationObj.createdAt).toBe("number");
    });
});