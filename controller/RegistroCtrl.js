const express = require("express")
const registroDAO = require("../model/RegistroDAO");
const parametrosCtrl = require("./ParametrosCtrl");

const registroCtrl = {}

registroCtrl.listar = async() => {
    let registros = await registroDAO.find();
    return registros;
};

registroCtrl.insertar = async(registro) => {
    registro.hora_ingreso = AsignarFecha();
    delete registro._id;
    return await registroDAO.create(registro);
};

registroCtrl.actualizar = async(registro) => {
    registro.hora_salida = AsignarFecha();
    TotalPagar();
    return await registroDAO.findOneAndUpdate(registro._id, registro);

};


registroCtrl.eliminar = async(id) => {
    await registroDAO.deleteOne({ _id: id });

};

function AsignarFecha() {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let fechaFinal = String(anio + "-" + mes + "-" + dia + " " + hora + ":" + minutos);
    return fechaFinal;
}

function TotalPagar(registro) {
    let parametros = parametrosCtrl.listar();

    var tiempoParqueo = (Date.parse(this.registro.hora_salida) - Date.parse(this.registro.hora_ingreso)) / 60000;

    if (this.registro.tipo_vehiculo == "Carro") {

        registro.total_pagar = (tiempoParqueo * parametros[0].tarifa_minuto_carro)
    } else {
        registro.total_pagar = (tiempoParqueo * parametros[0].tarifa_minuto_moto)
    }

}
module.exports = registroCtrl;