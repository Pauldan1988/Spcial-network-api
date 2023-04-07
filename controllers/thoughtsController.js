const { Thought, User } = require("../models")

async function createThought(req, res) {
    try {
        const user = await User.findById(req.params.userId)
        const newThought = await Thought.create({
            thoughtText: req.body.thoughtText,
            username: user.username
        })
        user.thoughts.push(newThought._id)
        await user.save()
        res.status(200).json(user)
    } catch (err) {
        return res.status(500).json(err)
    }

}
// res.status(404).json({message: "Cannot find user with that provided ID"})
async function updateThought(req, res) {
try{
res.status(200).json({message: "Working?"})
} catch(err) {

}
}

async function deleteThought(req, res) {
try{
// res.status(200).json({message: "Working?"})
} catch(err) {
    
}
}

async function getThought(req, res) {
try{
// res.status(200).json({message: "Working?"})
} catch(err) {
    
}
}

module.exports = {
    createThought,
    updateThought,
    deleteThought,
    getThought
}