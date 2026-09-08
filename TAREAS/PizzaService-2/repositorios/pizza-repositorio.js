
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