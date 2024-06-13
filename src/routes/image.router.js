const { getAll, create, getOne, remove, update } = require('../controllers/image.controllers');
const express = require('express');

const imageRouter = express.Router();

imageRouter.route('/images')
    .get(getAll)
    .post(create);

imageRouter.route('/images/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = imageRouter;