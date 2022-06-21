const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; 

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(PORT, function() {
    console.log(`servidor corriendo en puerto ${PORT}`)});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
