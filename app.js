// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Añadir al array
    amigos.push(nombreAmigo);
    
    actualizarListaAmigos();
    limpiarCampo();

    return;
}

function limpiarCampo() {
    document.getElementById('amigo').value = '';

    return;
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista para cada amigo
        let li = document.createElement('li');
        li.textContent = amigos[i];
        
        // Agregar el elemento a la lista
        listaAmigos.appendChild(li);
    }

    console.log(amigos);
    return;
}

