function generarNumero() {
    nroMagico = Math.floor(Math.random() * 100) + 1;
    const textoAlert = document.getElementById('textoAlert');
    textoAlert.textContent = 'El juego ha comenzado... ¡Adiviná el número!';
    btnGenerarNumero.classList.add('disabled')

    console.log('numero magico:' + nroMagico)
    return

}

function compararNumeros(e) {
    e.preventDefault(); //evitar que recargue la pagina

    const inputNroIngresado = document.getElementById('numeroIngresado')
    const nroIngresado = inputNroIngresado.value
    console.log(nroIngresado)
    let textoAlert = document.getElementById('textoAlert')
    let colorAlert = document.getElementById('colorAlert')
    colorAlert.classList.remove('alert-success', 'alert-danger');
    colorAlert.classList.add('alert-primary');


    if (nroMagico === parseInt(nroIngresado)) {
        console.log('ADIVINASTE')
        textoAlert.textContent = '🎉 Felicitaciones!!! Adivinaste el Número Mágico'
        colorAlert = document.getElementById('colorAlert').classList.toggle('alert-success');
        btnGenerarNumero.classList.remove('disabled')
        btnGenerarNumero.classList.add('enabled')

    } else if (nroMagico > nroIngresado) {
        console.log('el nro MAGICO es MAYOR')
        textoAlert.textContent = '😥 Lo sentimos! El Número Mágico es MAYOR al número ingresado. Intente nuevamente.'
        colorAlert = document.getElementById('colorAlert').classList.toggle('alert-danger');

    } else {
        console.log('el nro MAGICO es MENOR')
        textoAlert.textContent = '😥 Lo sentimos! El Número Mágico es MENOR al número ingresado. Intente nuevamente.'
        colorAlert = document.getElementById('colorAlert').classList.toggle('alert-danger');
    }

    
    // blanquer input
    formNro.reset();
}

//=========== logica =============
let nroMagico = null;

let btnGenerarNumero = document.getElementById('btnComenzar')
btnGenerarNumero.addEventListener('click', generarNumero)

//lee el nro ingresado por el usuario
const formNro = document.querySelector('form')
formNro.addEventListener('submit', compararNumeros)

