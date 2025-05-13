function generarNumero() {
    nroMagico = Math.floor(Math.random() * 100) + 1;
    const textoAlert = document.getElementById('textoAlert');
    textoAlert.textContent = 'El juego ha comenzado... ¡Adiviná el número!';

    console.log('numero magico:' + nroMagico)
    return

}

function compararNumeros(e) {
    e.preventDefault(); //evitar que recargue la pagina

    const inputNroIngresado = document.getElementById('numeroIngresado')
    const nroIngresado = inputNroIngresado.value
    console.log(nroIngresado)
    const textoAlert = document.getElementById('textoAlert')
    textoAlert.textContent = 'Felicitaciones!!! Adivinaste el Número Mágico'


    if (nroMagico === nroIngresado) {
        console.log('ADIVINASTE')
        textoAlert.textContent = '🎉 Felicitaciones!!! Adivinaste el Número Mágico'

    } else if (nroMagico > nroIngresado) {
        console.log('el nro MAGICO es MAYOR')
        textoAlert.textContent = '😥 Lo sentimos! El Número Mágico es MAYOR al ingresado'
    } else {
        console.log('el nro MAGICO es MENOR')
        textoAlert.textContent = '😥 Lo sentimos! El Número Mágico es MENOR al ingresado'
    }
}

//=========== logica =============
const btnGenerarNumero = document.getElementById('btnComenzar')
let nroMagico = 0
btnGenerarNumero.addEventListener('click', generarNumero)

//lee el nro ingresado por el usuario
const formNro = document.querySelector('form')
formNro.addEventListener('submit', compararNumeros)