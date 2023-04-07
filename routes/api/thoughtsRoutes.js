const router = require("express").Router()
const {
    createThought,
    updateThought,
    deleteThought,
    getThought
} = require("../../controllers/thoughtsController")

router.route("/:userId").post(createThought)

router.route("/").put(updateThought)

module.exports = router