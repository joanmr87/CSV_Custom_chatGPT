const express = require ("express");
const { PORT } = require("./config");
const app = express();

app.use(express.json());

const DB = [{id: 1, name: 'Dante', age: 3}];

app.get("/api/users", (req, res) => {
    res.json(DB);
});

app.post("/api/users", (req, res) => {
    const user = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
    };
    res.json(user);
});

app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
});