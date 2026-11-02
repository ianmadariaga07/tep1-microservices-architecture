package fes.aragon.iantranquilino.webController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import fes.aragon.iantranquilino.businessLayer.PizzasBusinessLayer;
import fes.aragon.iantranquilino.dtos.PizzaDto;
import fes.aragon.iantranquilino.dtos.PizzaDtoIn;

@Controller
public class PizzaWebController {

    private final PizzasBusinessLayer pizzaBusinessLayer;

    public PizzaWebController(PizzasBusinessLayer pizzaBusinessLayer) {
        this.pizzaBusinessLayer = pizzaBusinessLayer;
    }

    @GetMapping({"/", "/pizzas"})
    public String index(Model model) {
        model.addAttribute("pizzas", pizzaBusinessLayer.obtenerTodas());
        return "pizzas/index";
    }

    @GetMapping("/pizzas/crear")
    public String crear() {
        return "pizzas/crear";
    }

    @PostMapping("/pizzas/crear")
    public String guardar(@ModelAttribute PizzaDtoIn pizzaDtoIn) {
        pizzaBusinessLayer.agregar(pizzaDtoIn);
        return "redirect:/pizzas";
    }

    @GetMapping("/pizzas/editar/{id}")
    public String editar(@PathVariable("id") int id, Model model) {
        PizzaDto pizza = pizzaBusinessLayer.obtenerPorId(id);
        model.addAttribute("pizza", pizza);
        return "pizzas/editar";
    }

    @PostMapping("/pizzas/actualizar/{id}")
    public String actualizar(@PathVariable("id") int id, @ModelAttribute PizzaDtoIn pizzaDtoIn) {
        pizzaBusinessLayer.actualizar(id, pizzaDtoIn);
        return "redirect:/pizzas";
    }

    @PostMapping("/pizzas/borrar/{id}")
    public String borrar(@PathVariable("id") int id) {
        pizzaBusinessLayer.borrar(id);
        return "redirect:/pizzas";
    }
}