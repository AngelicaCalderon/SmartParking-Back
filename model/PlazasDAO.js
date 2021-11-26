const mongoose = require("../DB/conexionBD")

const plazasSchema = mongoose.Schema({
    plaza: String,
    estado: String
}, {
    collection: "plazas",
    versionKey: false
});

const plazasDAO = mongoose.model('plazas', plazasSchema);

module.exports = plazasDAO;