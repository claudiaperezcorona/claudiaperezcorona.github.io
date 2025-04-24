const sem1_content = `
    <ol class="space-y-4">
        <li class="bg-gradient-to-tr from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded px-6 py-4 shadow flex flex-col sm:flex-row justify-between items-center">
            <span class="font-semibold">Día 1: Pecho, Hombros y Tríceps (Lunes)</span>
            <button onclick="abrirModalRutina('dia1')" class="bg-blue-700 text-white px-4 py-2 rounded-lg shadow font-bold hover:bg-blue-800 transition text-base mt-2 sm:mt-0">
                ▶ Ver rutina
            </button>
        </li>
        <li class="bg-gradient-to-tr from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded px-6 py-4 shadow flex flex-col sm:flex-row justify-between items-center">
            <span class="font-semibold">Día 2: Piernas Completo, Pantorrilla (Martes)</span>
            <button onclick="abrirModalRutina('dia2')" class="bg-blue-700 text-white px-4 py-2 rounded-lg shadow font-bold hover:bg-blue-800 transition text-base mt-2 sm:mt-0">
                ▶ Ver rutina
            </button>
        </li>
        <li class="bg-gradient-to-tr from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded px-6 py-4 shadow flex flex-col sm:flex-row justify-between items-center">
            <span class="font-semibold">Día 3: Espalda y Bíceps (Miércoles)</span>
            <button onclick="abrirModalRutina('dia3')" class="bg-blue-700 text-white px-4 py-2 rounded-lg shadow font-bold hover:bg-blue-800 transition text-base mt-2 sm:mt-0">
                ▶ Ver rutina
            </button>
        </li>
        <li class="bg-gradient-to-tr from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded px-6 py-4 shadow flex flex-col sm:flex-row justify-between items-center">
            <span class="font-semibold">Día 4: Abductores, Glúteos, Femorales, Pantorrillas y Abdominales (Jueves)</span>
            <button onclick="abrirModalRutina('dia4')" class="bg-blue-700 text-white px-4 py-2 rounded-lg shadow font-bold hover:bg-blue-800 transition text-base mt-2 sm:mt-0">
                ▶ Ver rutina
            </button>
        </li>
        <li class="bg-gradient-to-tr from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded px-6 py-4 shadow flex flex-col sm:flex-row justify-between items-center">
            <span class="font-semibold">Día 5: Pecho, Hombros y Tríceps (Viernes)</span>
            <button onclick="abrirModalRutina('dia5')" class="bg-blue-700 text-white px-4 py-2 rounded-lg shadow font-bold hover:bg-blue-800 transition text-base mt-2 sm:mt-0">
                ▶ Ver rutina
            </button>
        </li>
    </ol>
    <div class="mt-8 text-center">
        <button onclick="showSection('rutina')" class="px-6 py-2 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-900 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-300 dark:hover:bg-gray-800 transition flex items-center gap-2 shadow mx-auto">
            <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
            Volver a Rutina
        </button>
    </div>
`;

function cargarContenidoModalRutinaDia1() {
    const contenido = `
        <div class="rutina-vintage">
            <div class="grupo-muscular">
                <h4>CALENTAMIENTO</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="lunes1-ej1" onchange="tacharEjercicio('lunes1-ej1')" />
                    <label for="lunes1-ej1"><strong>Calentamiento de Manguito Rotador</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('lunes', 'manguito_rotador.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Manguito rotador, estabilizadores del hombro.</p>
                    <p><strong>Series:</strong> 2 series.</p>
                    <p><strong>Reps:</strong> 10-15 repeticiones submáximas.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Realiza movimientos controlados con peso ligero o banda elástica para activar los músculos estabilizadores del hombro.</li>
                        <li>Mantén un ritmo suave, sin buscar fatiga.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Prepara los hombros para ejercicios pesados, reduciendo el riesgo de lesiones en el manguito rotador.</p>
                </details>
            </div>
            <!-- Resto de la rutina del Día 1 (omitido por brevedad) -->
        </div>
    `;
    return { title: 'Lunes: Pecho, Hombros y Tríceps', content: contenido };
}

function cargarContenidoModalRutinaDia2() {
    const contenido = `
        <div class="rutina-vintage">
            <div class="grupo-muscular">
                <h4>CALENTAMIENTO</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="dia2-ej1" onchange="tacharEjercicio('dia2-ej1')" />
                    <label for="dia2-ej1"><strong>Pirámide de Sentadilla (Progresiva + Invertida)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('martes', 'piramide_sentadilla.mp4')}" type="video/mp4" />
                        <source src="${get_videos_path('martes', 'piramide_sentadilla.webm')}" type="video/webm" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Cuádriceps, glúteos</p>
                    <p><strong>Series:</strong> 1 serie continua</p>
                    <p><strong>Reps:</strong></p>
                    <ul>
                        <li>15 reps con bajo peso</li>
                        <li>+ peso → 12 reps</li>
                        <li>+ peso → 8 reps</li>
                        <li>Descansa 20 seg estrictos</li>
                        <li>Pirámide invertida: 8 reps → 12 reps → 15 reps bajando peso</li>
                    </ul>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Calienta articulaciones y activa cuádriceps y glúteos sin fatigar.</li>
                        <li>Usa pesos progresivos para activar el sistema nervioso.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Mejora la conexión mente-músculo, activa fibras y lubrica articulaciones antes del trabajo fuerte.</p>
                    <p><strong>Por qué es efectiva:</strong> Activa el sistema nervioso y prepara el patrón de sentadilla con volumen leve antes de lo pesado.</p>
                </details>
            </div>
            <!-- Resto de la rutina del Día 2 (omitido por brevedad) -->
        </div>
    `;
    return { title: 'Martes: Piernas Completo, Pantorrilla', content: contenido };
}

function cargarContenidoModalRutinaDia3() {
    const contenido = `
        <div class="rutina-vintage">
            <div class="grupo-muscular">
                <h4>CALENTAMIENTO</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3-ej1" onchange="tacharEjercicio('dia3-ej1')" />
                    <label for="dia3-ej1"><strong>Face Pulls</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('miercoles', 'face_pulls.mp4')}" type="video/mp4" />
                        <source src="${get_videos_path('miercoles', 'face_pulls.webm')}" type="video/webm" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Zona del Hombro:</strong> Posterior</p>
                    <p><strong>Series:</strong> 2 series</p>
                    <p><strong>Reps:</strong> 12-15 repeticiones</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Realiza el movimiento tirando la cuerda hacia la cara.</li>
                        <li>Mantén los codos altos y retrae los omóplatos para activar el deltoides posterior.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Activa el deltoides posterior, preparando los hombros para ejercicios de espalda.</p>
                </details>
                <!-- Resto de la rutina del Día 3 (omitido por brevedad) -->
            </div>
        </div>
    `;
    return { title: 'Miércoles: Espalda y Bíceps', content: contenido };
}

function cargarContenidoModalRutinaDia4() {
    const contenido = `
        <div class="rutina-vintage">
            <div class="grupo-muscular">
                <h4>ABDUCTORES</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="dia4-ej1" onchange="tacharEjercicio('dia4-ej1')" />
                    <label for="dia4-ej1"><strong>Abduction Machine Pyramid (Abducciones en Máquina en Pirámide)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('jueves', 'abduction_machine.mp4')}" type="video/mp4" />
                        <source src="${get_videos_path('jueves', 'abduction_machine.webm')}" type="video/webm" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Abductores (glúteo medio, tensor de la fascia lata)</p>
                    <p><strong>Series:</strong> 2 series</p>
                    <p><strong>Reps:</strong> 15+10+8 por serie</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Comienza con el peso más ligero: 15 repeticiones.</li>
                        <li>Aumenta el peso: 10 repeticiones.</li>
                        <li>Aumenta el peso nuevamente: 8 repeticiones.</li>
                        <li>Mantén el movimiento controlado, abriendo las piernas completamente.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Fortalece los abductores, mejorando la estabilidad de la cadera y la apariencia estética del glúteo medio.</p>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>SUPERSERIE: FEMORALES Y GLÚTEOS</h4>
                <div class="biserie">
                    <div class="ejercicio">
                        <input type="checkbox" id="dia4-ej2" onchange="tacharEjercicio('dia4-ej2')" />
                        <label for="dia4-ej2"><strong>Dumbbell Deadlift (Peso Muerto con Mancuerna)</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="dia4-ej3" onchange="tacharEjercicio('dia4-ej3')" />
                        <label for="dia4-ej3"><strong>Seated Hamstring Curl (Máquina de Femoral Sentado)</strong></label>
                    </div>
                    <details>
                        <summary>Detalles de la Superserie</summary>
                        <p><strong>Dumbbell Deadlift:</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('jueves', 'dumbbell_deadlift.mp4')}" type="video/mp4" />
                            <source src="${get_videos_path('jueves', 'dumbbell_deadlift.webm')}" type="video/webm" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Parte trabajada:</strong> Femorales, glúteos</p>
                        <p><strong>Series:</strong> 3 series</p>
                        <p><strong>Reps:</strong> 10 repeticiones</p>
                        <p><strong>Ejecución:</strong></p>
                        <ul>
                            <li>Sostén mancuernas, inclínate hacia adelante manteniendo la espalda recta, baja hasta sentir estiramiento en los femorales.</li>
                            <li>Sube contrayendo glúteos y femorales.</li>
                        </ul>
                        <p><strong>Seated Hamstring Curl:</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('jueves', 'seated_hamstring_curl.mp4')}" type="video/mp4" />
                            <source src="${get_videos_path('jueves', 'seated_hamstring_curl.webm')}" type="video/webm" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Parte trabajada:</strong> Femorales</p>
                        <p><strong>Series:</strong> 3 series</p>
                        <p><strong>Reps:</strong> 5+10+15 repeticiones</p>
                        <p><strong>Ejecución:</strong></p>
                        <ul>
                            <li>5 repeticiones con el peso máximo posible.</li>
                            <li>Disminuye el peso: 10 repeticiones.</li>
                            <li>Disminuye nuevamente: 15 repeticiones.</li>
                        </ul>
                        <p><strong>Importancia:</strong> Combina un ejercicio compuesto (peso muerto) con uno aislado (curl), maximizando la fuerza y hipertrofia en femorales.</p>
                    </details>
                </div>
            </div>
            <div class="grupo-muscular">
                <h4>GLÚTEOS</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="dia4-ej4" onchange="tacharEjercicio('dia4-ej4')" />
                    <label for="dia4-ej4"><strong>Hip Thrust (Elevación de Cadera)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('jueves', 'hip_thrust.mp4')}" type="video/mp4" />
                        <source src="${get_videos_path('jueves', 'hip_thrust.webm')}" type="video/webm" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Glúteos, femorales</p>
                    <p><strong>Series:</strong> 2 series</p>
                    <p><strong>Reps:</strong> 12+10+6 con pausas (12 seg, 10 seg, 6 seg en la parte alta)</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Realiza 12 repeticiones (mantén 12 segundos en la parte alta), 10 repeticiones (10 segundos), 6 repeticiones (6 segundos).</li>
                        <li>Variante opcional: Mantén la pausa en la posición baja en lugar de la alta.</li>
                        <li>Usa una barra o mancuerna, apoyando la espalda en un banco.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Enfoca los glúteos con alta intensidad, usando pausas isométricas para maximizar la activación.</p>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>SUPERSERIE: GLÚTEOS Y CUÁDRICEPS</h4>
                <div class="biserie">
                    <div class="ejercicio">
                        <input type="checkbox" id="dia4-ej5" onchange="tacharEjercicio('dia4-ej5')" />
                        <label for="dia4-ej5"><strong>Sumo Squat (Sentadilla Sumo con Barra)</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="dia4-ej6" onchange="tacharEjercicio('dia4-ej6')" />
                        <label for="dia4-ej6"><strong>Dumbbell Lunges (Desplantes con Mancuernas)</strong></label>
                    </div>
                    <details>
                        <summary>Detalles de la Superserie</summary>
                        <p><strong>Sumo Squat:</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('jueves', 'sumo_squat.mp4')}" type="video/mp4" />
                            <source src="${get_videos_path('jueves', 'sumo_squat.webm')}" type="video/webm" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Parte trabajada:</strong> Glúteos, cuádriceps, abductores</p>
                        <p><strong>Series:</strong> 2 series</p>
                        <p><strong>Reps:</strong> 12 repeticiones pesadas</p>
                        <p><strong>Ejecución:</strong></p>
                        <ul>
                            <li>Usa un agarre diagonal, realiza 12 repeticiones pesadas con postura amplia.</li>
                        </ul>
                        <p><strong>Dumbbell Lunges:</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('jueves', 'dumbbell_lunges.mp4')}" type="video/mp4" />
                            <source src="${get_videos_path('jueves', 'dumbbell_lunges.webm')}" type="video/webm" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Parte trabajada:</strong> Glúteos, cuádriceps</p>
                        <p><strong>Series:</strong> 2 series</p>
                        <p><strong>Reps:</strong> 8 pasos de ida + 8 pasos de vuelta</p>
                        <p><strong>Ejecución:</strong></p>
                        <ul>
                            <li>Manteniendo el torso erguido, realiza 8 pasos de ida + 8 pasos de vuelta.</li>
                        </ul>
                        <p><strong>Importancia:</strong> La sentadilla sumo activa glúteos y abductores, mientras los desplantes añaden trabajo unilateral para estabilidad.</p>
                    </details>
                </div>
            </div>
            <div class="grupo-muscular">
                <h4>PANTORRILLAS</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="dia4-ej7" onchange="tacharEjercicio('dia4-ej7')" />
                    <label for="dia4-ej7"><strong>Seated Calf Raises (Pantorrilla Sentada para Sóleo)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('jueves', 'seated_calf_raises.mp4')}" type="video/mp4" />
                        <source src="${get_videos_path('jueves', 'seated_calf_raises.webm')}" type="video/webm" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Sóleo (pantorrilla profunda)</p>
                    <p><strong>Series:</strong> 2 series</p>
                    <p><strong>Reps:</strong> Hasta el fallo</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>En una máquina de pantorrilla sentada, realiza repeticiones hasta el fallo con un rango completo.</li>
                        <li>Mantén el movimiento controlado, con una breve pausa en la parte alta.</li>
                    </ul>
                    <p><strong>Importancia:</strong> El sóleo, activado con las rodillas flexionadas, contribuye al grosor de la pantorrilla, esencial para un desarrollo completo.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="dia4-ej8" onchange="tacharEjercicio('dia4-ej8')" />
                    <label for="dia4-ej8"><strong>Straight-Leg Seated Calf Raise (Elevación de Pantorrilla Sentada con Piernas Rectas)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('jueves', 'straight_leg_calf_raise.mp4')}" type="video/mp4" />
                        <source src="${get_videos_path('jueves', 'straight_leg_calf_raise.webm')}" type="video/webm" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Gastrocnemio (principalmente), sóleo (secundariamente)</p>
                    <p><strong>Series:</strong> 2 series</p>
                    <p><strong>Reps:</strong> 10+10+10 por serie (puntas afuera, rectas, adentro)</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Siéntate con las piernas extendidas, talones colgando de la plataforma.</li>
                        <li>Eleva los talones lo más alto posible, baja lentamente hasta el estiramiento máximo.</li>
                        <li>Realiza 10 repeticiones por posición: puntas afuera, rectas, adentro.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Aísla el gastrocnemio con piernas rectas, complementando el trabajo del sóleo y promoviendo definición.</p>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>ABDOMINALES</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="dia4-ej9" onchange="tacharEjercicio('dia4-ej9')" />
                    <label for="dia4-ej9"><strong>Hanging Leg Raises (Elevaciones de Piernas Colgado)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('jueves', 'hanging_leg_raises.mp4')}" type="video/mp4" />
                        <source src="${get_videos_path('jueves', 'hanging_leg_raises.webm')}" type="video/webm" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Recto abdominal, oblicuos</p>
                    <p><strong>Series:</strong> 3 series</p>
                    <p><strong>Reps:</strong> 20 repeticiones</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Cuelga de una barra, eleva las piernas rectas hasta formar un ángulo de 90 grados.</li>
                        <li>Baja lentamente, evitando balanceo.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Fortalece el core completo, con énfasis en la porción inferior del recto abdominal, mejorando estabilidad.</p>
                </details>
            </div>
        </div>
    `;
    return { title: 'Jueves: Abductores, Glúteos, Femorales, Pantorrillas y Abdominales', content: contenido };
}

function cargarContenidoModalRutinaDia5() {
    const contenido = `
        <div class="rutina-vintage">
            <div class="grupo-muscular">
                <h4>CALENTAMIENTO</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5-ej1" onchange="tacharEjercicio('dia5-ej1')" />
                    <label for="dia5-ej1"><strong>Band Pull Apart (Separación con Bandas)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('lunes', 'band_pull_apart.mp4')}" type="video/mp4" />
                        <source src="${get_videos_path('lunes', 'band_pull_apart.webm')}" type="video/webm" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Espalda media, trapecios inferiores, manguito rotador</p>
                    <p><strong>Series:</strong> 2 series</p>
                    <p><strong>Reps:</strong> 10-15 repeticiones submáximas</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Sostén una banda elástica desde una posición alta y sepárala hacia abajo lentamente.</li>
                        <li>Activa los músculos de la espalda media y calienta los hombros con control, sin llegar al fallo.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Estabiliza los hombros y activa la espalda media, preparando el cuerpo para movimientos de press pesados.</p>
                </details>
            </div>
            <!-- Resto de la rutina del Día 5 (omitido por brevedad) -->
        </div>
    `;
    return { title: 'Viernes: Pecho, Hombros y Tríceps', content: contenido };
}