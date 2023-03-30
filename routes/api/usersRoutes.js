const router = require("express").Router()
const { User } = require("../../models")
const { 
    getAllUsers, 
    getSingleUser, 
    createUser
} = require("../../controllers/usersController")

router.route("/").get(getAllUsers).post(createUser)

router.route("/:userId").get(getSingleUser)

module.exports = router  