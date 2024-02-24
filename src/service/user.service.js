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

    async getUserById(id) {
        try {
            const user = await this.User.findById(id);
            return user;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async addUser(data) {
        try {
            const newUser = new User(data);
            const saveUser = await newUser.save();
            return saveUser;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async editUser(id, data) {
        try {
            const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
            return updatedUser;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            const deleteUser = await User.findByIdAndDelete(id);
            return deleteUser;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

module.exports = userService;