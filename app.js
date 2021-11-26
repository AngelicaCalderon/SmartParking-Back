const { application, response, request } = require("express");
const { stringify } = require("nodemon/lib/utils");
const express = require("express")
const cors = require("cors")
const registroCtrl = require("./controller/RegistroCtrl")
const plazasCtrl = require("./controller/PlazasCtrl")
const parametrosCtrl = require("./controller/ParametrosCtrl")

const app = express();
app.use(express.json());
app.use(cors());

/*********************  REGISTRO  **********************/

app.get('/api/registro', async(request, response) => {
    let registros = await registroCtrl.listar();
    response.status(200).json(registros);
});

app.post('/api/registro', async(request, response) => {
    const registro = request.body;
    try {
        await registroCtrl.insertar(registro);
        response.status(200).json(registro);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});

app.put('/api/registro', async(request, response) => {
    const registro = request.body;
    try {
        await registroCtrl.actualizar(registro);
        response.status(200).json(registro);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});

app.delete('/api/registro/:id', async(request, response) => {
    let id = request.params.id
    console.log(id);
    await registroCtrl.eliminar(id);
    response.status(204).send("Server corriendo")
});

/*********************  FIN REGISTRO  ******************/

/*********************  PLAZAS  ******************/

app.get('/api/plazas', async(request, response) => {
    let plazas = await plazasCtrl.listar();
    response.status(200).json(plazas);
});

app.post('/api/plazas', async(request, response) => {
    const plazas = request.body;
    try {
        await plazasCtrl.insertar(plazas);
        response.status(200).json(plazas);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});

app.put('/api/plazas', async(request, response) => {
    const plaza = request.body;
    try {
        await plazasCtrl.actualizar(plaza);
        response.status(200).json(plaza);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});

app.delete('/api/plazas/:id', async(request, response) => {
    let id = request.params.id
    console.log(id);
    await plazasCtrl.eliminar(id);
    response.status(204).send("Server corriendo")
});

/*********************  FIN PLAZAS  ******************/


/*********************  PARAMETROS  ******************/

app.get('/api/parametros', async(request, response) => {
    let parametros = await parametrosCtrl.listar();
    response.status(200).json(parametros);
});

app.post('/api/parametros', async(request, response) => {
    const parametro = request.body;
    try {
        await parametrosCtrl.insertar(parametro);
        response.status(200).json(parametro);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});

app.put('/api/parametros', async(request, response) => {
    const parametro = request.body;
    try {
        await parametrosCtrl.actualizar(parametro);
        response.status(200).json(parametro);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});

app.delete('/api/parametros/:id', async(request, response) => {
    let id = request.params.id
    console.log(id);
    await registroCtrl.eliminar(id);
    response.status(204).send("Server corriendo")
});


/*********************  FIN PARAMETROS  ******************/


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("servidor corriendo")
});