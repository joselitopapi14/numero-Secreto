let numeroSecreto = 0;
let count = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarElementoTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeusuario == numeroSecreto){
        asignarElementoTexto('p', `Acertaste el número secreto y lo hiciste en
        ${count} ${count == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroDeusuario < numeroSecreto){
        asignarElementoTexto('p', 'El número secreto es mayor');      
    } else {
        asignarElementoTexto('p', 'El número secreto es menor'); 
    }

    count++;
    limpiar();
}

function limpiar(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarElementoTexto('h1', 'Juego del número secreto');
    asignarElementoTexto('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    count = 1;
}
condicionesIniciales();

function reiniciarJuego(){
    limpiar();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);    

}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarElementoTexto('p', 'Ya se sortearon todos los números posibles');
    } else if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
    }
}


