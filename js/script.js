 // Aquí tu código
const lista = document.getElementById('lista');
const boton = document.getElementById('agregar');


boton.addEventListener('click', function (){
    let elemento = prompt('Introduce un elemento');
    let hija = document.createElement('li');
    hija.textContent = elemento;
    lista.appendChild(hija);
    console.log(lista);
})