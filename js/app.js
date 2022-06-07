import {consultarAPI} from './consultaAPI.js';
import {mostrarHTML} from './mostrarHTML.js';


const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const mensaje1 = document.querySelector('#mensaje');



window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e) {

    e.preventDefault();
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    consultarAPI(ciudad, pais);

}







/* 
Validacion para que no envien input vacios 
Mostrar valores en el DOM 
temp: 283.15
temp_max: 283.15
temp_min: 283.15
Para mostrar en Grados Celcius restar 273.15
Mostrar un cartel de error que dure aprox 5 segundos
*/