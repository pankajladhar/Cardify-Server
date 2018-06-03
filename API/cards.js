const app = require('express');
const path = require('path');
const util = require('util');

const { fetchCards, addCard } = require('./../Repo');

const readFile = util.promisify(require("jsonfile").readFile);
const writeFile = util.promisify(require("jsonfile").writeFile);
const cardsRouter = app.Router();

cardsRouter.get('/fetch', (req, res) => {
    fetchCards()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
});

cardsRouter.post('/create', (req, res) => {
    let { avatar, style, cardType, alias } = req.body;
    let request = {
        id: (new Date()).valueOf(),
        avatar: avatar || cardType[0].toUpperCase(),
        style: style,
        cardType: cardType,
        alias: alias
    }

    addCard(request)
        .then(() => res.status(200).send({ "message": "sucessfuly added" }))
        .catch(err => res.status(500).send(err))
});

cardsRouter.delete('/delete', (req, res) => {
    let cardId = req.body.cardId;
    readFile(cards)
        .then((data) => data.filter((d) => d.id !== cardId))
        .then((data) => writeFile(cards, data, { spaces: 2 }))
        .then(() => res.status(200).send({ "message": "sucessfuly deleted" }))
        .catch(err => res.status(500).send(err))
})

module.exports = cardsRouter;