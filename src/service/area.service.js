const Area = require('./../database/models/area.model');

class areaService {
    constructor() {
        this.Area = Area;
    }

    async getAllAreas() {
        try {
            const areas = await this.Area.find();
            return areas;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async getAreaById(id) {
        try {
            const area = await this.Area.findById(id);
            return area;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async addArea(data) {
        try {
            const newArea = new Area(data);
            const saveArea = await newArea.save();
            return saveArea;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async editArea(id, data) {
        try {
            const updatedArea = await Area.findByIdAndUpdate(id, data, { new: true });
            return updatedArea;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async deleteArea(id) {
        try {
            const deleteArea = await Area.findByIdAndDelete(id);
            return deleteArea;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

module.exports = areaService;