const router = require("express").Router()
const { 
    getAllUsers, 
    getSingleUser, 
    createUser,
    updateUser
} = require("../../controllers/usersController")

router.route("/").get(getAllUsers).post(createUser)

router.route("/:userId").get(getSingleUser).post(updateUser)

module.exports = router