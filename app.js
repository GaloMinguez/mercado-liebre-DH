const express = require('express');

const path = require('path');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src','views','index.html'));
});

app.get('/ofertas', (req, res) => {
    res.sendFile(path.join(__dirname, 'src','views','ofertas.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'src','views','registro.html'));
});

app.get('/iniciar-sesion', (req, res) => {
    res.sendFile(path.join(__dirname, 'src','views','iniciar-sesion.html'));
});



// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'src','views','error-404.html'));
// });

const publicPath = path.join(__dirname, 'src');

app.use(express.static(publicPath));

const port = process.env.PORT || 3003;

app.listen(port,()=> console.log(`http://localhost:${port}`));

