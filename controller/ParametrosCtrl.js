const express = require("express")
const parametrosDAO = require("../model/ParametrosDAO");


const parametrosCtrl = {}

parametrosCtrl.listar = async() => {
    let parametros = await parametrosDAO.find();
    return parametros;
};

parametrosCtrl.insertar = async(parametro) => {
    return await parametrosDAO.create(parametro);
};

parametrosCtrl.actualizar = async(parametro) => {
    return await parametrosDAO.findOneAndUpdate(parametro._id, parametro);
};

parametrosCtrl.eliminar = async(id) => {
    await parametrosDAO.deleteOne({ _id: id });

};

module.exports = parametrosCtrl;