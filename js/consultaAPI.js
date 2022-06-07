import { mostrarError } from './error.js';
import { mostrarHTML } from './mostrarHTML.js';

export function consultarAPI(ciudad, pais) {
    const apiKEY = '0481cfa1f81aa499c7b0d951a49b91ba';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKEY}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (ciudad !== ''){
                if(data.cod === '404'){
                    mostrarError('Ciudad no Encontrada');
                } else if(data.cod === '400'){
                    mostrarError('No ingreso ningún dato');
                }else{
                    const {main,name} = data;
                    const temp = (main.temp - 273.15).toFixed(2);
                    const temp_min = (main.temp_min - 273.15).toFixed(2);
                    const temp_max = (main.temp_max - 273.15).toFixed(2);
                    mostrarHTML(`Ciudad: ${name} Temp: ${temp}°C
                                MIN: ${temp_min}°C
                                MAX: ${temp_max}°C`);
        
                    console.log(data)
    
                }
            } else {
                mostrarError('Ingrese una ciudad')
            }


            
        })
}