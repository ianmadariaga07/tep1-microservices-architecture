package fes.aragon.iantranquilino.controllers;

import java.util.ArrayList;
import org.springframework.web.bind.annotation.*;
import fes.aragon.iantranquilino.businessLayer.PizzasBusinessLayer;
import fes.aragon.iantranquilino.dtos.IdDto;
import fes.aragon.iantranquilino.dtos.PizzaDto;
import fes.aragon.iantranquilino.dtos.PizzaDtoIn;

@RestController
@RequestMapping("/api/v1/pizzas")
public class PizzaController {

    private final PizzasBusinessLayer pizzaBusinessLayer;

    public PizzaController(PizzasBusinessLayer pizzaBusinessLayer) {
        this.pizzaBusinessLayer = pizzaBusinessLayer;
    }

    @GetMapping
    public ArrayList<PizzaDto> obtenerTodas() {
        return pizzaBusinessLayer.obtenerTodas();
    }

    @GetMapping("/{id}")
    public PizzaDto obtenerPorId(@PathVariable("id") int id) {
        return pizzaBusinessLayer.obtenerPorId(id);
    }

    @PostMapping
    public IdDto agregar(@RequestBody PizzaDtoIn pizzaDtoIn) {
        return pizzaBusinessLayer.agregar(pizzaDtoIn);
    }

    @PutMapping("/{id}")
    public void actualizar(@PathVariable("id") int id, @RequestBody PizzaDtoIn pizzaDtoIn) {
        pizzaBusinessLayer.actualizar(id, pizzaDtoIn);
    }

    @DeleteMapping("/{id}")
    public void borrar(@PathVariable("id") int id) {
        pizzaBusinessLayer.borrar(id);
    }
}