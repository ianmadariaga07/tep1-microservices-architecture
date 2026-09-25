import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check } from 'k6';
import http from 'k6/http';

const baseUrl = 'http://localhost:3000/api/v1/pizzas/';

export default function () {
  //OBTENER TODAS (GET)
  const resGetAll = http.get(baseUrl);
  check(resGetAll, {
    'GET Todas status 200': (r) => r.status === 200
  });

  //AGREGAR PIZZA (POST)
  const payload = JSON.stringify({ 
    nombre: 'Pizza k6', 
    descripcion: 'Prueba de carga y reporte' 
  });
  const params = { headers: { 'Content-Type': 'application/json' } };
  const resPost = http.post(baseUrl, payload, params);
  
  check(resPost, {
    //201 crear
    'POST Agregar status 201': (r) => r.status === 201 
  });

  //OBTENER PIZZA (GET x ID)
  const pizzaId = "6ab6f8b55155440e7792bfd3"; 
  const resGetOne = http.get(baseUrl + pizzaId);
  check(resGetOne, {
    'GET Una Pizza status 200': (r) => r.status === 200
  });

  //ACTUALIZAR PIZZA (PATCH x id)
  const updatePayload = JSON.stringify({ descripcion: 'Actualizada por k6' });
  const resPatch = http.patch(baseUrl + pizzaId, updatePayload, params);
  check(resPatch, {
    'PATCH Actualizar status 200': (r) => r.status === 200
  });
}

// Generador del reporte
export function handleSummary(data) {
  return {
    "reporte-k6.html": htmlReport(data)
  }
}