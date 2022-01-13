const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();
const homeRouter = require("./routes/mainRouter");
const publicPath = path.resolve(__dirname,'./public');

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");


//RUTAS
app.use(homeRouter);




//Servidor
app.listen(process.env.PORT || 3000, () =>console.log("Servidor Corriendo en Puerto 3000"));