const container2 = document.querySelector('.container2');
const messageElement = document.getElementById('message');

function handleOrientationChange() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        container2.style.backgroundColor = 'lightblue';
        messageElement.style.fontSize = '24px';
        messageElement.style.color = 'white';
    } else if (window.matchMedia("(orientation: landscape)").matches) {
        container2.style.backgroundColor = 'lightgreen';
        messageElement.style.fontSize = '18px';
        messageElement.style.color = 'black';
    }
}

// Agrega un evento 'resize' para detectar cambios de orientación
window.addEventListener('resize', handleOrientationChange);

// Ejecuta el manejador al cargar la página
handleOrientationChange();