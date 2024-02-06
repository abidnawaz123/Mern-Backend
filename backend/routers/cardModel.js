const express = require("express")
const { getCardList, addCard } = require("../controllers/cardController")
const router = express.Router()

router.get("/", getCardList)
router.post("/", addCard)

module.exports = router;
