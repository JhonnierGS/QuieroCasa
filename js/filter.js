function open(){
    document.getElementById('window').style.display="block"
}

function close(){
    document.getElementById('window').style.display="none"
}

function apliFiltro(){
    document.querySelector('.noIniciado').classList.add("noInit")
    document.querySelector('.noIniciado2').classList.add("noInit")
    document.querySelector('.noIniciado3').classList.add("noInit")
    document.getElementById('detenido').classList.add("noInit")
    document.getElementById('detenido2').classList.add("noInit")
    document.getElementById('finalizado').classList.add("noInit")
    document.getElementById('finalizado2').classList.add("noInit")
    document.getElementById('finalizado3').classList.add("noInit")
}
document.getElementById('boton').onclick = function(){
    apliFiltro()
}

function removeFiltro(){
    document.querySelector('.noIniciado').classList.remove("noInit")
    document.querySelector('.noIniciado2').classList.remove("noInit")
    document.querySelector('.noIniciado3').classList.remove("noInit")
    document.getElementById('detenido').classList.remove("noInit")
    document.getElementById('detenido2').classList.remove("noInit")
    document.getElementById('finalizado').classList.remove("noInit")
    document.getElementById('finalizado2').classList.remove("noInit")
    document.getElementById('finalizado3').classList.remove("noInit")
}
document.getElementById('botonClear').onclick = function(){
    removeFiltro()
}
