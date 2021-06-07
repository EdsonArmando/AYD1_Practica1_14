require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
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

if (process.env.NODE_ENV === 'test') {
    port = 3000;
}
 
if (process.env.NODE_ENV === 'test') {
    port = 4000;
}
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
