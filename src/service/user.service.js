const User = require('./../database/models/user.model');
class userService {
    constructor() {
        this.User = User;
    }

    async getAllUsers() {
        try {
            const users = await this.User.find();
            return users;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

module.exports = userService;