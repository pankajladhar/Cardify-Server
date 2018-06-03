const path = require('path');
const util = require('util');
const jsonfile = require("jsonfile");
const readFile = util.promisify(jsonfile.readFile);
const writeFile = util.promisify(jsonfile.writeFile);

const cards = path.resolve(__dirname, '..', 'data', 'cards.json');

const fetchCards = () => {
    return readFile(cards);
}

module.exports = fetchCards;