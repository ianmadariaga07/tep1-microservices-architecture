const express = require('express');
const app = express();
const PORT = 3000; // Puerto en el que escuchará el servidor

app.use(express.json())
app.use(express.urlencoded({extended:true}))

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

app.get("/api/v1/pizza/:id", (req, res)=>{
    console.log(req.query)
    console.log(req.path)
    console.log(req.params)
    const id = req.params.id
    console.log("id: ", id)
    const pizzas = [{ nombre: "Hawaiana", descripcion: "Jamon y Piña"}]
    return res.status(200).json(pizzas)
})


/*
regresa una pizza por el id
esta es una simulacion para la conexion de la db
@param {*} id
*/

function obtenerPizzaID(id){
    return { nombre: "Hawaiana", descripcion: "Jamon y Piña" }
}

app.get("/api/v1/pizza/function/:id", (req, res)=>{
    const id = req.params.id
    console.log("id: ", id)
    const pizzas = obtenerPizzaID(id)
    return res.status(200).json(pizzas)
})

//consumo de otro servicio, fetch
app.get("/api/v1/placeholder", async (req, res)=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/post/1")
    const json = await response.json()

    return res.status(200).json(json)
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});