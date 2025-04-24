const sem2_content = `
    <p class="text-center py-12">Próximamente...</p>
    <div class="mt-8 text-center">
        <button onclick="showSection('rutina')" class="px-6 py-2 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-900 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-300 dark:hover:bg-gray-800 transition flex items-center gap-2 shadow mx-auto">
            <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
            Volver a Rutina
        </button>
    </div>
`;

// Placeholder para futuras rutinas
function cargarContenidoModalRutinaSemana2(dia) {
    return { title: `Día ${dia} - Semana 2`, content: '<p>Rutina no disponible aún.</p>' };
}