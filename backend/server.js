require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Estudiantes = require('./models');
let port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const mongodbURL = `mongodb+srv://andrea:1364@cluster0.lg3fq.mongodb.net/Practica1?retryWrites=true&w=majority`
mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is conencted to', db.connection.host))
    .catch(err => {
        console.log("ERROR AL CONECTAR LA DB!!!!!");
        console.error(err);
    });

app.get('/estudiante', async(req, res) => {
    const response = await Estudiantes.find({});
    res.json({ listaUsuarios: response });
});

app.post('/estudiante', async(req, res) => {
    let data = req.body;

    const response = await Estudiantes.find({ DPI: data.DPI })

    if (response.length == 0) {
        data._id = new mongoose.Types.ObjectId();
        let nuevoEstudiante = new Estudiantes(data);
        nuevoEstudiante.save()
            .then(result => {
                res.json({
                    status: true,
                    msg: "Estudiante guardado con exito",
                    _id: result._id
                });
            })
            .catch(err => {
                console.log(err)
                res.json({
                    status: false,
                    msg: "Error el estudiante no se guardo"
                })
            })
    } else {
        res.json({
            status: false,
            msg: "Este DPI ya esta ingresado"
        })
    }
})


if (process.env.NODE_ENV === 'test') {
    port = 3000;
}

if (process.env.NODE_ENV === 'test') {
    port = 4000;
}
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});