const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
})
)

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ info: 'Good morning Adam.' });
})

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser)

app.listen(PORT, () => console.log(`The server is listening on port: ${PORT}`))