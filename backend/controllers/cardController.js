const cardList = require("../models/cardModel")

const getCardList = async (req, res) => {
    const card = await cardList.find({}).sort({ createdAt: -1 })
    res.status(200).json(card)
}

const addCard = async (req, res) => {
    const { balance, name, valid, cardNumber } = req.body;
    try {
        const card = await cardList.create({ balance, name, valid, cardNumber })
        res.status(200).json(card)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getCardList, addCard }
