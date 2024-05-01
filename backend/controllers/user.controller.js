import User from "../models/user.model.js"

const getUsers = async (req, res) => {
    try {
        const currentUserId = req.user._id
        // get all users except the current user
        const users = await User.find({ _id: { $ne: currentUserId } }).select("-password")

        return res.status(200).json(users)
    } catch (error) {
        console.log("Error getting users: ", error.message)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}


export {getUsers}