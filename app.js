// Importar modulo http y exprexx
import http from "http";
import express from "express";
const
// Crear una instancia de express
const app = express(); // (req, res) => {UN MONTON DE CODIGO}

// Registrar nuestro primer middleware
app.use((req, res, next)=> {
    console.log("Ejecutando el Middleware 1");
    next();
});

app.use((req, res, next)=>{
    console.log("Ejecutando el Misddleware 2");
    next()
});
app.use((req, res, next)=>{
    console.log(`${req.method} - ${req.url}`);
    next();
});
app.use((req, res, next)=>{
    console.log("Respondiendo al cliente");
    res.send(`
    <h1>Welcome to express</h1>
    <p>This is my awesome app</p>
    `);
});
app.use('/add-product',(req,res)=>{
    if(req.method "POST")return
    console.log("Sirviendo el formulario")
    res.send(`
    <form action="/add-product" method="POST">
    <input type="text" name="title">
    <button type="submit">Add Product</button>
    </form>
    `);
});
app.use('/addproduct',(req,res)=>{
    for(const prop in req){
        console.log(`PROP:${prop}`);
    }

})
// Creando el servidor
const server = http.createServer(app);

// Definir puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancar el servidor
server.listen(port, ip, (err) => {

    console.log("Funcionando en http://localhost:3000");

});