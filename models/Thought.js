const { Schema, model } = require("mongoose")

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            date: {type: Date, default: Date.now}
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: "Reaction"
            }
        ]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true  
        },
        id: false
    }
)

thoughtSchema
    .virtual("reactionCount").get(function(){
        return this.reactions.length;
    }) 

const Thought = model("thought", thoughtSchema)

module.exports = Thought