const path = require('path');
const util = require('util');
const jsonfile = require("jsonfile");
const readFile = util.promisify(jsonfile.readFile);
const writeFile = util.promisify(jsonfile.writeFile);

const cards = path.resolve(__dirname, '..', 'data', 'cards.json');

const addCard = (request) => {
    return readFile(cards)
        .then(data => data)
        .then((data) => writeFile(cards, [...data, request], { spaces: 2 }))
}

module.exports = addCard;