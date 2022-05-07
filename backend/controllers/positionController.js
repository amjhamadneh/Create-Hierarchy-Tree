
const db = require('../models/')
const { models } = db.sequelize; // returns object with all our models.

const getPositions = async (req, res) => {
    try {
        const positions = await models.Position.findAll();
        return res.json({ positions: positions });
    }
    catch (err) {
        return res.json(err);
    }
}

const addPositions = async (req, res) => {
    try {
        const _positions = req.body;
        _positions.reverse();
        let counter = 1;
        const map = new Map();
        _positions.map((pos) => {
            models.Position.create({ id: counter, description: pos.description, parentId: ((counter === 1) ? counter : map.get(pos.parent)) });
            map.set(pos.description, counter);
            counter++;
        });
        res.json(map);
    }
    catch (err) {
        return res.json(err);
    }
}

module.exports = {addPositions, getPositions};
