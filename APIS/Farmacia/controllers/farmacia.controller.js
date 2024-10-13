
const { response, request } = require('express');


const viewFarmacia = async (req = request, res = response) => {
    const responseData = {
        'msg': 'Información de la farmacia',
        'nombre': 'Farmacia Martinez',
        'lugar': 'Ciudad de Pasto'
    };
    
 
    res.send(`<pre>${JSON.stringify(responseData, null, 4)}</pre>`);
};



const createFarmacia = (req, res = response) => {
    const { nombre, lugar } = req.body;

    if (!nombre || !lugar) {
        return res.status(400).json({
            msg: 'Nombre y lugar de la Farmacia requeridos' 
        });
    }

    res.status(201).json({
        msg: 'Farmacia creada exitosamente', 
        nombre,
        lugar
    });
};


const updateFarmacia = (req, res = response) => {
    const { id } = req.params;
    const { nombre, lugar } = req.body;

    if (!nombre || !lugar) {
        return res.status(400).json({
            msg: 'Nombre y lugar de la farmacia requeridos' 
        });
    }

    res.status(200).json({
        msg: 'Farmacia actualizada exitosamente', 
        id,
        nombre,
        lugar
    });
};


const deleteFarmacia = (req, res = response) => {
    const { id } = req.params;
    res.status(410).json({
        msg: 'Farmacia borrada exitosamente', 
        id
    });
};

module.exports = {
    viewFarmacia,
    createFarmacia,
    updateFarmacia,
    deleteFarmacia,
};