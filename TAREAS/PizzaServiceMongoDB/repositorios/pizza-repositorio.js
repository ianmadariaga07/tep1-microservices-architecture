import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

// Cadena de conexión obtenida de Mongo Compass
// const MONGO_URI = "mongodb://root:123456@localhost:27017/PizzaMongo?authSource=admin";
const dbUser = process.env.DB_NAME;
const dbPassword = process.env.BD_PASSWORD;
const MONGO_URI = `mongodb+srv://${dbUser}:${dbPassword}@pizzaservice.w8o6n2r.mongodb.net/?appName=PizzaService`;

// 1. Establecer la conexión a MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado exitosamente a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// 2. Definir el Schema y el Modelo de Mongoose
const pizzaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true }
}, { versionKey: false }); // versionKey false quita el "__v" que Mongo pone por defecto

const Pizza = mongoose.model('Pizza', pizzaSchema);

/**
 * Obtiene todas las pizzas registradas en la base de datos.
 * @returns {Promise<Array>} Un arreglo de objetos con todas las pizzas.
 */
export async function obtenerTodasLasPizzasAsync() {
    return await Pizza.find({});
}

/**
 * Busca una pizza específica mediante su identificador único.
 * @param {String} id - El identificador único de la pizza.
 * @returns {Promise<Object|null>} El objeto de la pizza si se encuentra, o null si no existe.
 */
export async function obtenerPizzaIdAsync(id) {
    try {
        return await Pizza.findById(id);
    } catch (error) {
        // Si el ID no tiene el formato válido de Mongo (24 caracteres hex), atrapa el error
        return null; 
    }
}

/**
 * Agrega un nuevo registro de pizza a la base de datos.
 * @param {Object} pizza - Objeto con los datos de la pizza (nombre, descripcion, etc).
 * @returns {Promise<Object>} El objeto de la pizza recién creada.
 */
export async function agregarPizzaAsync(pizza) {
    const nuevaPizza = new Pizza(pizza);
    await nuevaPizza.save();
    return nuevaPizza._id; // Retornamos el _id que genera Mongo automáticamente
}

/**
 * Actualiza los datos de una pizza existente.
 * @param {String} id - El identificador único de la pizza a actualizar.
 * @param {Object} pizzaActualizada - Objeto con los nuevos datos a sobreescribir.
 * @returns {Promise<Object|null>} El objeto de la pizza actualizada, o null si no se encontró.
 */
export async function actualizarPizzaAsync(id, pizzaActualizada) {
    try {
        // El parámetro { new: true } es para que Mongoose devuelva el objeto ya actualizado
        return await Pizza.findByIdAndUpdate(id, pizzaActualizada, { new: true });
    } catch (error) {
        return null;
    }
}

/**
 * Elimina permanentemente una pizza de la base de datos.
 * @param {String} id - El identificador único de la pizza a borrar.
 * @returns {Promise<Boolean>} True si se eliminó correctamente, False si no se encontró.
 */
export async function borrarPizzaAsync(id) {
    try {
        const resultado = await Pizza.findByIdAndDelete(id);
        return resultado !== null; // Retorna true si borró algo, false si no encontró el ID
    } catch (error) {
        return false;
    }
}