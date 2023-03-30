// const connection = require("../config/connection")
// const names = require("./data")
// const { User, Thought } = require("../models")
// const { raw } = require("express")

// connection.once("open", async () => {
    
//     await User.deleteMany({})

//     await Thought.deleteMany({})
    
//     const users = names.map(name => {
//         return {
//             username: name,
//             email: `${name}@Gmail.com`
//         }
//     })
//    await User.collection.insertMany(users)
//    const Users = await User.find({})

//    Users.forEach(async (user, idx) => {
//     const friendsSet = new Set()
//     for (let i=0;i<4;i++) {
//         const friend1 = Users[Math.floor(Math.random() * Users.length)]
//         friendsSet.add(friend1)
//     }

//     const friendsArray = Array.from(friendsSet)

//     await User.updateOne({_id: user._id}, {$push: { friends: friendsArray}})
//    })
//    const UsersWFriends = await User.find({})
//    console.log(UsersWFriends)
//    process.exit(0);
// })

