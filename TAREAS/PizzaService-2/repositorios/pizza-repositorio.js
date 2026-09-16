
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let pizzas = [{ id:1, nombre: "HAWAIANA", descripcion: "JAMON Y PIÑA" }]

export async function obtenerTodasLasPizzasAsync() {
    await sleep(2000)
    return pizzas
}

export async function obtenerPizzaIdAsync(id){
    await sleep(1000)
    const pizza = pizzas.find(x => x.id == id)
    return pizza
}

export async function agregarPizzaAsync(pizza){
    await sleep(1000)
    pizzas.push(pizza)
    return pizzas.length
}

//ACTUALIZAR
export async function actualizarPizzaAsync(id, pizzaActualizada){
    await sleep(1000)
    let pizza = pizzas.find(x => x.id == id)
    if(pizza == -1)
        return undefined
    pizza.nombre = pizzaActualizada.nombre
    pizza.descripcion = pizzaActualizada.descripcion
    return "pizza actualizada"
}

//BORRAR
export async function borrarPizzaAsync(id){
    await sleep(1000)
    const index = pizzas.findIndex(x => x.id == id) 
    if(index !== -1)
        pizzas.splice(index,1)
    return "pizza borrada"
}