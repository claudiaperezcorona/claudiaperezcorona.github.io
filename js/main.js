// Mostrar sección
function showSection(name, event) {
    if (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    }
    // Ocultar todas las secciones y desmarcar los enlaces de navegación
    ['home', 'rutina', 'detail', 'ejercicios', 'musculos', 'estiramientos'].forEach(id => {
        const el = document.getElementById('view-' + id);
        if (el) el.classList.add('hidden');
        const nav = document.getElementById('nav-' + id);
        if (nav) nav.classList.remove("bg-white/20", "font-bold", "ring-2", "ring-white", "text-white", "shadow");
    });
    // Mostrar la sección solicitada
    if (document.getElementById('view-' + name)) {
        document.getElementById('view-' + name).classList.remove('hidden');
    }
    // Resaltar el enlace de navegación correspondiente (excepto para 'detail')
    if (name !== 'detail' && document.getElementById('nav-' + name)) {
        document.getElementById('nav-' + name).classList.add("bg-white/20", "font-bold", "ring-2", "ring-white", "text-white", "shadow");
    }
    // Actualizar el estado de navegación e historial (excepto para 'detail', que lo manejamos manualmente)
    goBackState = name;
    history.pushState({ section: name }, '', `#${name}`);
}

// Añadir manejadores de eventos a los enlaces de navegación
document.querySelectorAll('.nav-container a').forEach(link => {
    link.addEventListener('click', (event) => {
        const section = link.getAttribute('href').replace('#', '');
        showSection(section, event);
    });
});


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


function abrirModalRutina(dia) {
    let rutina;
    // Semana 1
    if (dia === 'dia1') {
        rutina = cargarContenidoModalRutinaDia1();
    } else if (dia === 'dia2') {
        rutina = cargarContenidoModalRutinaDia2();
    } else if (dia === 'dia3') {
        rutina = cargarContenidoModalRutinaDia3();
    } else if (dia === 'dia4') {
        rutina = cargarContenidoModalRutinaDia4();
    } else if (dia === 'dia5') {
        rutina = cargarContenidoModalRutinaDia5();
    } 
    // Semana 2
    else if (dia === 'dia1-sem2') {
        rutina = cargarContenidoModalRutinaDia1Sem2();
    } else if (dia === 'dia2-sem2') {
        rutina = cargarContenidoModalRutinaDia2Sem2();
    } else if (dia === 'dia3-sem2') {
        rutina = cargarContenidoModalRutinaDia3Sem2();
    } else if (dia === 'dia4-sem2') {
        rutina = cargarContenidoModalRutinaDia4Sem2();
    } else if (dia === 'dia5-sem2') {
        rutina = cargarContenidoModalRutinaDia5Sem2();
    } else {
        // Caso por defecto para cualquier día no reconocido
        rutina = { title: `Día Desconocido`, content: '<p>Rutina no disponible.</p>' };
    }

    document.getElementById('modal-rutina-title').textContent = rutina.title;
    document.getElementById('contenido-modal-rutina').innerHTML = rutina.content;
    document.getElementById('modal-rutina').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    // Añadir estado al historial para el modal, incluyendo la semana actual
    const currentWeek = goBackState === 'detail' ? (document.getElementById('detail-title').textContent.includes('Semana 1') ? 1 : 2) : 1;
    history.pushState({ modal: dia, section: 'detail', week: currentWeek }, '', `#rutina-${dia}`);
}

function cerrarModalRutina() {
    document.getElementById('modal-rutina').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    // Restaurar la vista de detalle con la semana correspondiente
    const currentWeek = goBackState === 'detail' ? (document.getElementById('detail-title').textContent.includes('Semana 1') ? 1 : 2) : 1;
    document.getElementById('detail-title').textContent = `Detalle Semana ${currentWeek}`;
    document.getElementById('content-detail').innerHTML = currentWeek === 1 ? sem1_content : sem2_content;
    showSection('detail');
    goBackState = 'detail';
    // Actualizar el historial
    history.pushState({ section: 'detail', week: currentWeek }, '', `#detalle-semana${currentWeek}`);
}

// Manejar el gesto de atrás
window.addEventListener('popstate', (event) => {
    const state = event.state;
    if (state) {
        if (state.modal) {
            // Reabrir el modal si se retrocede a un estado de modal (soporta días de Semana 1 y Semana 2)
            abrirModalRutina(state.modal);
        } else if (state.section) {
            // Mostrar la sección correspondiente
            if (state.section === 'detail') {
                // Restaurar la semana correcta
                document.getElementById('detail-title').textContent = `Detalle Semana ${state.week}`;
                document.getElementById('content-detail').innerHTML = state.week === 1 ? sem1_content : sem2_content;
                goBackState = 'detail';
            }
            showSection(state.section);
        }
    } else {
        // Si no hay estado, regresar a home
        showSection('home');
    }
});

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
    // Añadir estado al historial para detalle (Semana 1)
    history.pushState({ section: 'detail', week: 1 }, '', '#detalle-semana1');
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
    // Añadir estado al historial para detalle (Semana 2)
    history.pushState({ section: 'detail', week: 2 }, '', '#detalle-semana2');
};

// Inicializar la vista por defecto
showSection('home');