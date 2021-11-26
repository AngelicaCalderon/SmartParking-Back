const mongoose = require("../DB/conexionBD")

const registroSchema = mongoose.Schema({
    placa_vehiculo: String,
    plaza: String,
    hora_ingreso: String,
    hora_salida: String,
    imagen_vehiculo: String,
    tipo_vehiculo: String,
    total_pagar: String,
}, {
    collection: "registro",
    versionKey: false
});

const registroDAO = mongoose.model('registro', registroSchema);

module.exports = registroDAO;