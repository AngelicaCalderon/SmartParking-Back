const mongoose = require("../DB/conexionBD")

const parametrosSchema = mongoose.Schema({

    tarifa_minuto_carro: Number,
    tarifa_minuto_moto: Number,
    tarifa_minuto_bicicleta: Number

}, {

    collection: "parametros",
    versionKey: false

});

const parametrosDAO = mongoose.model('parametros', parametrosSchema);

module.exports = parametrosDAO;