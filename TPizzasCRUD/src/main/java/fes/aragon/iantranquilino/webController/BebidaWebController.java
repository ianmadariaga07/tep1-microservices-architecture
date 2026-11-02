package fes.aragon.iantranquilino.webController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import fes.aragon.iantranquilino.businessLayer.BebidasBusinessLayer;
import fes.aragon.iantranquilino.dtos.BebidaDto;
import fes.aragon.iantranquilino.dtos.BebidaDtoIn;

@Controller
public class BebidaWebController {

    private final BebidasBusinessLayer bebidasBusinessLayer;

    public BebidaWebController(BebidasBusinessLayer bebidasBusinessLayer) {
        this.bebidasBusinessLayer = bebidasBusinessLayer;
    }

    @GetMapping("/bebidas")
    public String index(Model model) {
        model.addAttribute("bebidas", bebidasBusinessLayer.obtenerTodas());
        return "bebidas/index";
    }

    @GetMapping("/bebidas/crear")
    public String crear() {
        return "bebidas/crear";
    }

    @PostMapping("/bebidas/crear")
    public String guardar(@ModelAttribute BebidaDtoIn bebidaDtoIn) {
        bebidasBusinessLayer.agregar(bebidaDtoIn);
        return "redirect:/bebidas";
    }

    @GetMapping("/bebidas/editar/{id}")
    public String editar(@PathVariable("id") int id, Model model) {
        BebidaDto bebida = bebidasBusinessLayer.obtenerPorId(id);
        model.addAttribute("bebida", bebida);
        return "bebidas/editar";
    }

    @PostMapping("/bebidas/actualizar/{id}")
    public String actualizar(@PathVariable("id") int id, @ModelAttribute BebidaDtoIn bebidaDtoIn) {
        bebidasBusinessLayer.actualizar(id, bebidaDtoIn);
        return "redirect:/bebidas";
    }

    @PostMapping("/bebidas/borrar/{id}")
    public String borrar(@PathVariable("id") int id) {
        bebidasBusinessLayer.borrar(id);
        return "redirect:/bebidas";
    }
}