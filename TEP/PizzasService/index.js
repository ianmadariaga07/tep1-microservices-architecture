const express = require('express');
const app = express();
const PORT = 3000; // Puerto en el que escuchará el servidor

app.get("/", (req, res)=>{
    const respuesta = { mensaje: "BIENVENIDO A PIZZA PLANETA"}
    return res.json(respuesta)
})

//PIZZAS - 201 created
app.get("/api/v1/pizza", (req, res)=>{
    const respuesta = { mensaje: "PIZZAS DISPONIBLES: ",
        lista: [
            { nombre: "PEPPERONI", precio: "100" },
            { nombre: "QUESO", precio: "90" },
            { nombre: "HAWAIANA", precio: "130" },
            { nombre: "MEXICANA", precio: "150" },
        ],
        respuesta: "La eleccion fue exitosa, elige un tamanio y bebida para completar pedido"
    }
    return res.status(201).json(respuesta)
})

//TAMANIOS - 200 ok 
app.get("/api/v1/pizza/tamanios", (req, res)=>{
    const respuesta = { mensaje: "TAMANIOS DISPONIBLES: ",
        lista: ["INDIVIDUAL, MEDIANA, GRANDE, EXTREMA"],
        respuesta: "La eleccion fue exitosa, continua con la bebida para completar pedido"
    }
    return res.status(200).json(respuesta)
})

//200 ok 
app.get("/api/v1/pizza/bebidas", (req, res)=>{
    const respuesta = { mensaje: "BEBIDAS DISPONIBLES: ",
        lista: ["AGUA, AGUA MINERAL, REFRESCO DE COLA, FUZETEA, JUGO, AWITA DE JAMAICA"],
        respuesta: "La eleccion fue exitosa, pedido completado. Continue con el metodo de pago"
    }
    return res.status(200).json(respuesta)
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});