import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message", // name of the model that this ObjectId refers to
            default: [],
            required: true
        }
    ],
    // created at
    // updated at
}, { timestamps: true })

const Conversation = mongoose.model("Conversation", conversationSchema)

export default Conversation