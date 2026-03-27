const express = require("express")
const router = express.Router()

const cryptoController = require("../controllers/cryptoController")

router.get("/homepage", cryptoController.getHomepage)
router.get("/coin/:id", cryptoController.getCoin)
router.get("/market-chart/:coin", cryptoController.getMarketChart)

module.exports = router