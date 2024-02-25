const express = require('express');
const areaService = require('./../service/area.service');

const router = express.Router();
const service = new areaService();

//#region endpoint area
router.get('/', async (req, res) => {
    try {
        const area = await service.getAllAreas();
        res.status(200).json(area);
    } catch (error) {
        res.status(404).json({ error: error });
        throw error;
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const area = await service.getAreaById(id);
        res.status(200).json(area);
    } catch (error) {
        res.status(404).json({ error: error });
        throw error;
    }
});

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const area = await service.addArea(data);
        res.status(200).json(area);
    } catch (error) {
        res.status(404).json({ error: error });
        throw error;
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const area = await service.editArea(id, data);
        res.status(200).json(area);
    } catch (error) {
        res.status(404).json({ error: error });
        throw error;
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const area = await service.deleteArea(id);
        res.status(200).json(area);
    } catch (error) {
        res.status(404).json({ error: error });
        throw error;
    }
});
//#endregion

module.exports = router;