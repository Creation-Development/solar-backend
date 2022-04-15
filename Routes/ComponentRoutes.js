const express = require('express')
const { AllComponent, AddComponent, FindComponent, EditHeaderComponent, EditHomeComponent } = require('../Controller/ComponentController')
const router = express.Router()

router.get("/all", AllComponent)
router.post("/add", AddComponent)
router.get("/:id", FindComponent)
router.post("/header/:id", EditHeaderComponent)
router.post("/home/:id", EditHomeComponent)

module.exports = router
