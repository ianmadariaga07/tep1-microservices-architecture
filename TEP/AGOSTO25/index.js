const express = require('express');
const app = express();
const PORT = 3000; // Puerto en el que escuchará el servidor

app.get("/", (req, res)=>{
    const respuesta = { mensaje: "BIENVENIDO A LA API TEP 1"}
    return res.json(respuesta)
})

//aquí definiríamos las rutas
// app.get("/api/v1/respuestas", (req, res)=>{
//     const respuesta = { mensaje: "HOLA MUNDO"}
//     return res.json(respuesta)
// })

app.get("/api/v1/respuestas", (req, res)=>{
    const respuesta = { mensaje: "HOLA MUNDO"}
    return res.status(200).json(respuesta)
})

//200
app.get("/api/v1/ok", (req, res)=>{
    const respuesta = { mensaje: "Bien"}
    return res.status(200).json(respuesta)
})

//201
app.get("/api/v1/created", (req, res)=>{
    const respuesta = { mensaje: "Peticion Creada"}
    return res.status(201).json(respuesta)
})

//202
app.get("/api/v1/accepted", (req, res)=>{
    const respuesta = { mensaje: "Peticion Aceptada"}
    return res.status(202).json(respuesta)
})

//400
app.get("/api/v1/badrequest", (req, res)=>{
    const respuesta = { mensaje: "Peticion rechazada"}
    return res.status(400).json(respuesta)
})

//404
app.get("/api/v1/notfound", (req, res)=>{
    const respuesta = { mensaje: "No encontrado"}
    return res.status(404).json(respuesta)
})

//500
app.get("/api/v1/error", (req, res)=>{
  const respuesta = { mensaje: "Oops, ocurrio un error"}
  return res.status(500).json(respuesta)
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});