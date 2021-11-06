let resultado = document.getElementById("resultado")
let resuelto = document.getElementById("resuelto")
let almacenador = ""
let coma = 0
let numeroPrimario = ""
let operadora = ""

let numero = function (valor) {
    if (resultado.value == "0") {
        if (valor == 0) {
            resultado.value = "0."
            resultado.value += valor
            coma = 1
            almacenador = resultado.value
        }
        else {
            resultado.value = ""
            resultado.value += valor
            almacenador = resultado.value
        }
    }
    else {
        resultado.value += valor
        almacenador = resultado.value
    }
}
function funcionPunto(valor) {
    if (resultado.value == "0") {
        resultado.value = "0."
        almacenador = resultado.value
        coma = 1

    }
    else{
        if(coma==0){
            numero(valor)
            coma = 1
        }
        else{

        }
    }
}
function funcionBorrar() {
    resultado.value = "0"
    almacenador = ""
    coma = 0
    operadora = ""
    numeroPrimario = ""
    resuelto.value = ""
}
function operador(operadorsi, valor) {
    igualar()
    coma=0
    numeroPrimario = almacenador
    operadora = operadorsi
    resultado.value = ""
    resuelto.value = (`${numeroPrimario} ${operadora}`)
}
function igualar() {
    if (operadora === "Error") {
        resultado.value = almacenador
    }
    else {
        resuelto.value+=(` ${almacenador}`)
        estructura = numeroPrimario + operadora + almacenador
        sisas = eval(estructura)
        resultado.value = parseFloat(sisas)
        almacenador = sisas
        operadora = "Error"
    }
}
function signos() {
    resultado.value = `${resultado.value * -1}`
    almacenador = resultado.value
}
function borrar() {
    cifras = almacenador.length;
    eliminar = almacenador.substr(cifras - 1, cifras)
    almacenador = almacenador.substr(0, cifras - 1)
    resultado.value = almacenador
    if (almacenador == "") { 
        resultado.value = "0"; 
    }
    if (eliminar == ".") {
        coma = 0; 
    }

}