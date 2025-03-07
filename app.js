let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML  = texto;
    return;

}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);


  console.log(intentos);
   if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
   }
   else {
    // el usuario no acerto
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor');
    } else {
        asignarTextoElemento('p', 'El numero secreto es mayor')
    }
    intentos++;
    limpiarCaja();
   }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros 

    if (listaNumerosSorteados.length == (numeroMaximo)){
            asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else {

    // Si el numero generado esta incluido en la lista 

    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
}
}
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
  
}

function CondicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Escoge un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego () {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalos de numeros
    // generar numero aleatorio
    // reiniciar el numero de intentos
    CondicionesIniciales();
    // volver a deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

CondicionesIniciales();