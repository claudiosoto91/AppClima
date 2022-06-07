
export function limpiarHTML(){
    while (mensaje1.firstChild){
        mensaje1.removeChild(mensaje1.firstChild);
    }

    setTimeout(()=>{
        formulario.reset();

    },3000);
}