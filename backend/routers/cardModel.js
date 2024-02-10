const express = require("express")
const { getCardList, addCard } = require("../controllers/cardController")
const requireAuth = require("../middleware/requireAuth")
const router = express.Router()

router.use(requireAuth)

router.get("/", getCardList)
router.post("/", addCard)

module.exports = router;
