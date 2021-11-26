const express = require("express")
const plazaDAO = require("../model/PlazasDAO");
const registroDAO = require("../model/RegistroDAO");
const registroCtrl = require("./RegistroCtrl");

const plazasCtrl = {}

plazasCtrl.listar = async() => {
    let plazas = await plazaDAO.find();
    return plazas;
};

plazasCtrl.insertar = async(plaza) => {
    return await plazaDAO.create(plaza);
};

plazasCtrl.actualizar = async(plaza) => {
    let estado = false;
    for (let i = 0; i < plazas.length; i++) {
        if (registroCtrl.insertar(registroDAO.plaza) === plazas[i].plaza) {
            plazas[i].estado = true;
        } else {
            plazas[i].estado = flase;
        }
        const element = plazas[i];
        return await plazaDAO.findOneAndUpdate(plaza._id, estado);
    }
};

plazasCtrl.eliminar = async(id) => {
    await plazaDAO.deleteOne({ _id: id });

};

module.exports = plazasCtrl;