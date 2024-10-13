const { Router } = require('express');
const { viewFarmacia, createFarmacia, updateFarmacia, deleteFarmacia } = require('../controllers/farmacia.controller');

const routerFarmacia = Router();

routerFarmacia.get('', viewFarmacia);
routerFarmacia.post('', createFarmacia);
routerFarmacia.put('/:id', updateFarmacia);
routerFarmacia.delete('/:id', deleteFarmacia);

module.exports = routerFarmacia;