// Archivo: main.js

// Función para cambiar el fondo de la sección, mostrar un mensaje y hacer scroll a la sección
function cambiarFondoYRedirigir(sectionId, color, mensaje) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.backgroundColor = color;
        alert(mensaje);
        section.scrollIntoView({ behavior: "smooth" }); // Scroll suave a la sección
    }
}

// Evento click en enlaces de navegación para cambiar el fondo, mostrar un mensaje y redirigir
document.querySelector('.musica a').addEventListener('click', function(event) {
    event.preventDefault();
    cambiarFondoYRedirigir('seccion1', '#043d05', 'Has seleccionado la sección de ponques');
});

document.querySelector('.juegos a').addEventListener('click', function(event) {
    event.preventDefault();
    cambiarFondoYRedirigir('seccion2', '#524e05', 'Has seleccionado la sección de postres');
});

document.querySelector('.contactos a').addEventListener('click', function(event) {
    event.preventDefault();
    cambiarFondoYRedirigir('contacto', '#5a5555', 'Has seleccionado la sección de Contactos');
});

// Evento mouseover en los títulos de las secciones para mostrar un mensaje
document.querySelector('#seccion1 .h2').addEventListener('mouseover', function() {
    alert('Estás en la sección de ponques');
});

document.querySelector('#seccion2 .h2').addEventListener('mouseover', function() {
    alert('Estás en la sección de postres');
});

// Creación de un formulario de contacto dinámico
const formulario = document.createElement('form');
formulario.innerHTML = `
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    <br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br><br>
    <button type="submit">Enviar</button>
`;
document.getElementById('contacto').appendChild(formulario);

// Evento submit en el formulario de contacto
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío real del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    alert('Gracias, ${nombre}. Hemos recibido tu mensaje a ${email}.');
    formulario.reset(); // Limpia el formulario después del envío
});