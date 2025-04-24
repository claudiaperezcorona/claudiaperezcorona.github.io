// Función para tachar ejercicios al marcarlos
function tacharEjercicio(id) {
    const checkbox = document.getElementById(id);
    const label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        label.classList.add('tachado');
    } else {
        label.classList.remove('tachado');
    }
}

// Función para generar rutas de video
function get_videos_path(day, videoName) {
    const hostname = window.location.hostname;
    if (hostname.includes('github.io')) {
        return `https://raw.githubusercontent.com/claudiaperezcorona/claudiaperezcorona.github.io/main/assets/videos/${day}/${videoName}`;
    } else {
        return `./assets/videos/${day}/${videoName}`;
    }
}