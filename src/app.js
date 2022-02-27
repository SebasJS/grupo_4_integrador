const express = require('express');
const session = require('express-session');
const res = require('express/lib/response');
const path = require('path');
const app = express();
const mainRouter = require("./routes/mainRouter");
const adminRouter = require("./routes/adminRouter");
const usersRouter = require("./routes/usersRouter");
const shopRouter = require("./routes/shopRouter");
const productsRouter = require("./routes/products");

const publicPath = path.resolve(__dirname,'./public');

app.use(session({
    secret: 'mensaje secreto',
    resave: false,
    saveUninitialized: false
}));

app.use(express.urlencoded({extended:false}));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");


//RUTAS
app.use('/',mainRouter);
app.use('/admin',adminRouter);
app.use('/shop',shopRouter);
app.use('/users',usersRouter);
app.use('/products',productsRouter);





//Servidor
app.listen(process.env.PORT || 3000, () =>console.log("Servidor Corriendo en Puerto 3000"));

module.exports = app;