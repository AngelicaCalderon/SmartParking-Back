const mongoose = require("mongoose");

const url = "mongodb+srv://gabriel:g4b0.1302@cluster0.zbkfm.mongodb.net/smartparking?retryWrites=true&w=majority";

// OPCIONES: { useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(url).then(() => console.log("CONECTADO A MONGO"))
    .catch((error) => console.log("la conexion fallo: " + error))

module.exports = mongoose;