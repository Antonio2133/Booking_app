const catchError = require('../utils/catchError');
const Hotel = require('../models/Hotel');

const getAll = catchError(async(req, res) => {
    const results = await Hotel.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const { name, description, price, address, cityId, lat, lon } = req.body;
    const result = await Hotel.create({
      name,
      description,
      price,
      address,
      cityId,
      lat,
      lon
    });
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Hotel.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Hotel.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Hotel.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}