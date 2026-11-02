package fes.aragon.iantranquilino.businessLayer;
import java.util.ArrayList;
import org.springframework.stereotype.Service;

import fes.aragon.iantranquilino.dtos.PizzaDto;
import fes.aragon.iantranquilino.dtos.PizzaDtoIn;
import fes.aragon.iantranquilino.dtos.IdDto;

@Service 
public class PizzasBusinessLayer {

    // Lista en memoria que simula la base de datos
    private ArrayList<PizzaDto> pizzas;
    private int contadorId = 3;

    // Constructor para inicializar los datos
    public PizzasBusinessLayer() {
        pizzas = new ArrayList<>();
        pizzas.add(new PizzaDto(1, "Hawaiana", "Jamon, piña y queso", 120));
        pizzas.add(new PizzaDto(2, "Mexicana", "Carne, jalapeños y queso", 150));
    }

    // LEER (Read)
    public ArrayList<PizzaDto> obtenerTodas() {
        return pizzas;
    }

    // CREAR (Create)
    public IdDto agregar(PizzaDtoIn pizzaDtoIn) {
        PizzaDto nuevaPizza = new PizzaDto(contadorId++, pizzaDtoIn.getNombre(), pizzaDtoIn.getDescripcion(), pizzaDtoIn.getPrecio());
        pizzas.add(nuevaPizza);
        return new IdDto(nuevaPizza.getId(), "Datos registrados exitosamente");
    }

    // LEER POR ID
    public PizzaDto obtenerPorId(int id){
        return pizzas.stream().filter(p -> p.getId() == id).findFirst().orElse(null);
    }

    // ACTUALIZAR (Update)
    public void actualizar(int id, PizzaDtoIn pizzaDtoIn){
        PizzaDto pizza = obtenerPorId(id);
        if(pizza != null){
            pizza.setNombre(pizzaDtoIn.getNombre());
            pizza.setDescripcion(pizzaDtoIn.getDescripcion());
            pizza.setPrecio(pizzaDtoIn.getPrecio());
        }
    }

    // ELIMINAR (Delete)
    public void borrar(int id){
        pizzas.removeIf(p -> p.getId() == id);
    }
}