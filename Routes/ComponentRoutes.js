const express = require('express')
const { AllComponent, AddComponent, FindComponent } = require('../Controller/ComponentController')
const router = express.Router()

router.get("/all", AllComponent)
router.post("/add", AddComponent)
router.get("/:id", FindComponent)

module.exports = router
