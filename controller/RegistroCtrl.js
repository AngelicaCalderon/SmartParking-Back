const express = require("express")
const registroDAO = require("../model/RegistroDAO")

const registroCtrl = {}

registroCtrl.listar = async() => {
    let registros = await registroDAO.find();
    return registros;
};

registroCtrl.insertar = async(registro) => {
    return await registroDAO.create(registro);
};

registroCtrl.actualizar = async(registro) => {
    return await registroDAO.findOneAndUpdate(registro._id, registro);
};

registroCtrl.eliminar = async(id) => {
    await registroDAO.deleteOne({ _id: id });

};

module.exports = registroCtrl;