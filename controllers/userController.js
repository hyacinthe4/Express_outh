// controllers/userController.js

const { User } = require('../models/user');  // Corrected path

async function deleteUser(req, res) {
    const { username } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        await User.destroy({ where: { username } });
        return res.status(200).json({ message: "User deleted successfully." });

    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ message: "An error occurred while trying to delete the user." });
    }
}

module.exports = { deleteUser };
