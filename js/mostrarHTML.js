import { limpiarHTML } from "./limpiarHTML.js";

export function mostrarHTML(mensaje,tipo){
    limpiarHTML();

    const mostrarMensaje = document.createElement('div');
    mostrarMensaje.classList.add('mensaje');
    mostrarMensaje.innerHTML = mensaje;
    if(tipo == 'error'){
        mostrarMensaje.classList.add('error');
    }

    mensaje1.appendChild(mostrarMensaje);     

    setTimeout(()=>{
        mostrarMensaje.remove();
    },5000);
}
