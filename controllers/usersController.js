const { User } = require("../models")

const friendCount = async () =>
    User.aggregate()
        .count("friendCount")
        .then((numberOfFriends) => numberOfFriends)



module.exports = {
    getAllUsers(req, res) {
        User.find()
            .populate("thoughts")
            .then(async (users) => {
                const userObj = {
                    users,
                    friendCount: await friendCount(),
                }
                return res.json(userObj)
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).json(err)
            })
        },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select("-__V")
        .populate("friends")
        .populate("thoughts")
        .then(async (user) => {
            !user
                ? res.status(404).json({ message: "There is no User with that ID" })
                : res.json({ user })
        })
        .catch((err) => {
            console.log(err)
            return res.status(500).json(err)
        })
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    }
    updateUser(req, res) {
        User.findOneAndUpdate(
            
        )
    }
}








































// const getAllUser = async (req, res) => {
//     try {
//         const allUsers = await User.find({})
//             .populate("friends")
//         return res.status(200).json(allUsers)
//     } catch (err) {
//         return res.status(500).json(err)
//     }
// }

// const getOneUser = async (req, res) => {
//     try{
//         const id = req.params.id
//         const oneUser = await User.findById(id)
//         if(!oneUser) {
//             return res.status(404).json({message: "User doesn't exist"})
//         }
//         return res.status(200).json(oneUser)
//     } catch(err) {
//        return res.status(500).json(err)
//     }
// }

// module.exports = {
//     getAllUser,
//     getOneUser
// }