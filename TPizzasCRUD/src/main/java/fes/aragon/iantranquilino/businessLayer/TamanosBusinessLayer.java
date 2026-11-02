package fes.aragon.iantranquilino.businessLayer;

import java.util.ArrayList;
import org.springframework.stereotype.Service;
import fes.aragon.iantranquilino.dtos.TamanoDto;
import fes.aragon.iantranquilino.dtos.TamanoDtoIn;
import fes.aragon.iantranquilino.dtos.IdDto;

@Service 
public class TamanosBusinessLayer {
    private ArrayList<TamanoDto> tamanos = new ArrayList<>();
    private int contadorId = 1;

    public ArrayList<TamanoDto> obtenerTodos() {
        return tamanos;
    }

    public IdDto agregar(TamanoDtoIn tamanoDtoIn) {
        TamanoDto nuevo = new TamanoDto(contadorId++, tamanoDtoIn.getNombre());
        tamanos.add(nuevo);
        return new IdDto(nuevo.getId(), "Tamaño registrado");
    }

    public TamanoDto obtenerPorId(int id){
        return tamanos.stream().filter(t -> t.getId() == id).findFirst().orElse(null);
    }

    public void actualizar(int id, TamanoDtoIn tamanoDtoIn){
        TamanoDto tamano = obtenerPorId(id);
        if(tamano != null){
            tamano.setNombre(tamanoDtoIn.getNombre());
        }
    }

    public void borrar(int id){
        tamanos.removeIf(t -> t.getId() == id);
    }
}
