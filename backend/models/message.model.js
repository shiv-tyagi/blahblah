import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",  // name of the model that this ObjectId refers to
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
    // created at
    // updated at
}, { timestamps: true })

const Message = mongoose.model("Message", messageSchema)

export default Message