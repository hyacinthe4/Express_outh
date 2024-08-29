const { User } = require('../models/user');

exports.deleteUser = async (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        const user = await User.findOne({ where: { username: username } });
        if (user) {
            await user.destroy();
            return res.status(200).json({ message: `User ${username} has been deleted` });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
