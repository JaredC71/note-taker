const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const APIRoutes = require('./routes/apiroutes');
const Store = require('./db/storesClasses');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoutes);
app.use('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));

});

app.post('/api/notes', (req, res) => {
    Store.addNotes(req.body)
        .then((note) => res.json(note))
        .then((note) => res.sendFile(path.join(__dirname, './db/db.json')))
        .catch((err) => {
            res.status(500).json(err);
        })
});
app.get('/api/notes', (req, res) => {
    Store.addNotes(req.body)
        .then((note) => res.json(note))
        .then((note) => res.sendFile(path.join(__dirname, './db/db.json')))
        .catch((err) => {
            res.status(500).json(err);
        })
});
// app.post('/notes', (req, res) => {
//     const newNote = req.body;    
// });

app.listen(PORT, () => {
    console.log(`Listening on : ${PORT}`);

});

