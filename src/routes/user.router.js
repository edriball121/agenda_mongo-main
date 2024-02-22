const express = require('express');
const userService = require('./../service/user.service');

const router = express.Router();
const service = new userService();

//#region endpoint user
router.get('/', async (req, res) => {
    try {
        const user = await service.getAllUsers();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error });
        throw error;
    }
})
//#endregion

module.exports = router;