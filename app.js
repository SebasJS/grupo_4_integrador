const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, './views/home.html'))  )

app.listen(process.env.PORT || 3000, () =>console.log("Servidor Corriendo en Puerto 3000"));

app.get('/product-info',(req,res)=> res.sendFile(path.resolve(__dirname,'./views/product-info.html')))
app.get('/product-car',(req,res)=> res.sendFile(path.resolve(__dirname,'./views/product-car.html')))