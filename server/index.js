require('dotenv').config();
const express = require('express');
const massive = require('massive');

//CONTROLLERS
const coffeeCtrl = require('./Controllers/coffeeControllers.js');

const {SERVER_PORT, CONNECTION_STRING} = process.env

//MIDDLEWARE
const app = express();

app.use(express.json());

massive({
    connectionString = CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then((db) => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`))
}).catch((err) => {
    console.log(err);
    res.status(500).send(err);
});

//ENDPOINTS
app.get('/api/coffee', coffeeCtrl.getCoffee)
app.post('/api/coffee', coffeeCtrl.addCoffee)
app.put('/api/coffee', coffeeCtrl.editCoffee)
app.delete('/api/coffee', coffeeCtrl.deleteCoffee)