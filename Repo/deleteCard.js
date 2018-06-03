const path = require('path');
const util = require('util');
const jsonfile = require("jsonfile");
const readFile = util.promisify(jsonfile.readFile);
const writeFile = util.promisify(jsonfile.writeFile);

const cards = path.resolve(__dirname, '..', 'data', 'cards.json');

const deleteCard = (cardId) => {
    return readFile(cards)
        .then((data) => data.filter((d) => d.id !== cardId))
        .then((data) => writeFile(cards, data, { spaces: 2 }))
}

module.exports = deleteCard;