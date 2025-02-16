// Array para almacenar los nombres de los amigos

let amigos = [];

// Función para agregar amigo
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    
    // Validaciones
    if (!nombreAmigo) return alert("Por favor, ingresa un nombre.");
    if (!/^[a-zA-Z]+$/.test(nombreAmigo)) return alert("Estas seguro que es un nombre?");
    if (amigos.includes(nombreAmigo)) return alert("Ese amigo ya está en la lista.");

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    actualizarLista();
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
let listaAmigos = document.getElementById("listaAmigos");
listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
if (!amigos.length) return alert("No hay amigos en la lista para jugar.");
let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
document.getElementById("resultado").innerHTML = `<strong>🎉 El amigo secreto es: ${amigoSorteado} 🎉</strong>`;


}