const express = require('express')
const { AllImage, AddImage, FindImage } = require('../Controller/SliderController')
const router = express.Router()

router.get("/all", AllImage)
router.post("/add", AddImage)
router.get("/:index", FindImage)

module.exports = router
