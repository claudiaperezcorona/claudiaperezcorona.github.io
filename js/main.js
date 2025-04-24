// Mostrar sección
function showSection(name) {
    ['home', 'rutina', 'detail', 'ejercicios', 'musculos', 'estiramientos'].forEach(id => {
        const el = document.getElementById('view-' + id);
        if (el) el.classList.add('hidden');
        const nav = document.getElementById('nav-' + id);
        if (nav) nav.classList.remove("bg-white/20", "font-bold", "ring-2", "ring-white", "text-white", "shadow");
    });
    if (name !== 'detail' && document.getElementById('view-' + name))
        document.getElementById('view-' + name).classList.remove('hidden');
    if (name !== 'detail' && document.getElementById('nav-' + name)) {
        document.getElementById('nav-' + name).classList.add("bg-white/20", "font-bold", "ring-2", "ring-white", "text-white", "shadow");
    }
    if (name !== 'detail') goBackState = name;
}

// GoBack, recuerda la vista previa
let goBackState = 'home';
function goBack() {
    if (goBackState === 'detail') showSection('rutina');
    else showSection('home');
}

// Tema oscuro
const root = document.documentElement;
function updateIcons() {
    document.getElementById('icon-light').classList.toggle('hidden', !root.classList.contains('dark'));
    document.getElementById('icon-dark').classList.toggle('hidden', root.classList.contains('dark'));
}
document.getElementById('theme-toggle').addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    updateIcons();
});
if (localStorage.getItem('theme') === 'dark') root.classList.add('dark');
if (localStorage.getItem('theme') === 'light') root.classList.remove('dark');
updateIcons();

// Funciones para el modal
function abrirModalRutina(dia) {
    let rutina;
    if (dia === 'dia1') {
        rutina = cargarContenidoModalRutinaDia1();
    } else if (dia === 'dia2') {
        rutina = cargarContenidoModalRutinaDia2();
    }  else if (dia === 'dia3') {
        rutina = cargarContenidoModalRutinaDia3();
    } else if (dia === 'dia4') {
        rutina = cargarContenidoModalRutinaDia4();
    } else if (dia === 'dia5') {
        rutina = cargarContenidoModalRutinaDia5();
    }  else {
        rutina = cargarContenidoModalRutinaSemana2(dia);
    }
    document.getElementById('modal-rutina-title').textContent = rutina.title;
    document.getElementById('contenido-modal-rutina').innerHTML = rutina.content;
    document.getElementById('modal-rutina').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function cerrarModalRutina() {
    document.getElementById('modal-rutina').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") cerrarModalRutina();
});

document.getElementById('modal-rutina').addEventListener('click', function (e) {
    if (e.target === this) cerrarModalRutina();
});

// Rutinas semanas
document.getElementById('btn-sem1').onclick = () => {
    document.getElementById('detail-title').textContent = 'Detalle Semana 1';
    document.getElementById('content-detail').innerHTML = sem1_content;
    document.getElementById('view-detail').classList.remove('hidden');
    ['home', 'rutina', 'ejercicios', 'musculos', 'estiramientos'].forEach(id => {
        const el = document.getElementById('view-' + id);
        if (el) el.classList.add('hidden');
    });
    goBackState = 'detail';
};

document.getElementById('btn-sem2').onclick = () => {
    document.getElementById('detail-title').textContent = 'Detalle Semana 2';
    document.getElementById('content-detail').innerHTML = sem2_content;
    document.getElementById('view-detail').classList.remove('hidden');
    ['home', 'rutina', 'ejercicios', 'musculos', 'estiramientos'].forEach(id => {
        const el = document.getElementById('view-' + id);
        if (el) el.classList.add('hidden');
    });
    goBackState = 'detail';
};

// Inicializar la vista por defecto
showSection('home');