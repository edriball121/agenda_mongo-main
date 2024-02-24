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
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await service.getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error });
        throw error;
    }
});

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const user = await service.addUser(data);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error });
        throw error;
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const user = await service.editUser(id, data);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error });
        throw error;
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await service.deleteUser(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error });
        throw error;
    }
})
//#endregion

module.exports = router;