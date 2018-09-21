let generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
};

let generateLocation = (from, lat, long) => {
    return {
        from,
        url: `https://google.com/maps?${lat},${long}`,
        createdAt: new Date().getTime()
    };
};

module.exports = {generateMessage, generateLocation};