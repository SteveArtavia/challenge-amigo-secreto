// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const agregarAmigo = () => {
    let amigo = document.getElementById('amigo').value;

    if(amigo == ''){
        alert('Por favor, inserte un nombre');
    }else{
        amigos.push(amigo);
    }

    document.getElementById('amigo').value = '';

    actualizarListaDeAmigos();
}

document.getElementById('amigo').addEventListener('keydown', (event) => {
    if(event.key === "Enter"){
        agregarAmigo();
    }
})

function actualizarListaDeAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    for(i = 0; i < amigos.length; i++){
        let elementoListaAmigo = document.createElement('li');
        elementoListaAmigo.innerHTML = `${amigos[i]}`;
        listaAmigos.appendChild(elementoListaAmigo);
    }

}
