const app = require('express');
const path = require('path');
const util = require('util');

const { fetchCards, addCard, deleteCard } = require('./../Repo');
const CONSTANTS = require('./../Contants');

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
        .then(() => res.status(200).send({ "message": CONSTANTS.ADD_CARD_SUCCESS }))
        .catch(err => res.status(500).send(err))
});

cardsRouter.delete('/delete', (req, res) => {
    let cardId = req.body.cardId;
    deleteCard(cardId)
        .then(() => res.status(200).send({ "message": CONSTANTS.DELETED_CARD_SUCCESS }))
        .catch(err => res.status(500).send(err))
})

module.exports = cardsRouter;