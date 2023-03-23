const connection = require("../config/connection")
const names = require("./data")
const { User, Thought } = require("../models")
const { raw } = require("express")

connection.once("open", async () => {
    
    await User.deleteMany({})

    await Thought.deleteMany({})
    
    const users = names.map(name => {
        return {
            username: name,
            email: `${name}@Gmail.com`
        }
    })
   await User.collection.insertMany(users)
   const Users = await User.find({})

   Users.forEach(async (user, idx) => {
    const friend1 = Users[Math.floor(Math.random() * Users.length)]
    const friend2 = User[Math.floor(Math.random() * Users.length)]
    const friend3 = User[Math.floor(Math.random() * Users.length)]

    const friends = [friend1, friend2, friend3]

    await User.updateOne({_id: user._id}, {$push: { friends: friend1}})
   })
   const UsersWFriends = await User.find({})
   console.log(UsersWFriends)
   process.exit(0);
})

