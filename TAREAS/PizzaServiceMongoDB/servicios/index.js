import express from "express";
import cors from 'cors';

import { obtenerTodasLasPizzasAsync, obtenerPizzaIdAsync, agregarPizzaAsync, actualizarPizzaAsync, borrarPizzaAsync } from "../repositorios/pizza-repositorio.js";

const app = express();
app.use(cors())
const PORT = 3000; // Puerto en el que escuchará el servidor

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//OBTENER TODAS
app.get("/api/v1/pizzas", async (req, res) => {
    const pizzas = await obtenerTodasLasPizzasAsync()
    return res.status(200).json(pizzas);
});

//OBTENER
app.get("/api/v1/pizzas/:id", async (req, res) => {
    const id = req.params.id
    const pizza = await obtenerPizzaIdAsync(id)
    return res.status(200).json(pizza);
});

//AGREGARq
app.post("/api/v1/pizzas/", async (req, res) => {
    const pizza = req.body;
    await agregarPizzaAsync(pizza);
    return res.status(201).json(pizza);
})

//ACTUALIZAR
app.patch("/api/v1/pizzas/:id", async (req, res) => {
    const id = req.params.id
    const pizza = await obtenerPizzaIdAsync(id)
    if(pizza == undefined){
        const mensaje = { mensaje: "No existe la pizza con ese id" }
        return res.status(404).json(mensaje)
    }
    const pizzaActualizada = req.body
    await actualizarPizzaAsync(id, pizzaActualizada)

    const mensaje = { mensaje: "Datos actualizados"}
    return res.status(200).json(mensaje);
});

//BORRAR
app.delete("/api/v1/pizzas/:id", async (req, res) => {
    const id = req.params.id
    const pizza = await borrarPizzaAsync(id)
    return res.status(200).json(pizza);    
})

//INICIAR EL SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto http://localhost:${PORT}`);
});
