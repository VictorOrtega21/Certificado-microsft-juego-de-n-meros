let NumeroSecreto=0;
let intentos=0;
let listadenumero=[];
let numeromaximo=10;
function asignarTextoElemento(elemento,texto)
{
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
   return;
}
function Verificarintento()
{
    let numerodeusuario = parseInt(document.getElementById('ValorUsuario').value);
    console.log(intentos);
    if(numerodeusuario === NumeroSecreto)
    {
        asignarTextoElemento(' p', ` Acertaste al Número en ${intentos} ${(intentos===1)?' Vez':' Veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numerodeusuario > NumeroSecreto)
        {
            asignarTextoElemento(' p', ' El número secreto es menor');
        }
        else
        {
            asignarTextoElemento(' p', ' El número secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}
function Condicionesiniciales(){
    asignarTextoElemento(' h1',' Juego del Número Secreto');
asignarTextoElemento(' p', ` Indica un Número del 1 al ${numeromaximo}`);
NumeroSecreto=GenerarNumeroSecreto();
    intentos=1;

}
function reiniciarjuego() {
    limpiarcaja();
    Condicionesiniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    

}
function limpiarcaja(){
   let valordecaja= document.querySelector(' #ValorUsuario');
   valordecaja.value= '';

}
function GenerarNumeroSecreto() {
    
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;
    console.log(numerogenerado);
    console.log(listadenumero);
    if(listadenumero.length==numeromaximo)
    {
       asignarTextoElemento('p','Ya se sortearon todos los números aleatorios posibles ');
    }
    else
    {
    if(listadenumero.includes(numerogenerado))
    {
        return GenerarNumeroSecreto();

    }else
    {
        listadenumero.push(numerogenerado);
        return numerogenerado;
      }
    
    
      }
      }
Condicionesiniciales();

    
    
