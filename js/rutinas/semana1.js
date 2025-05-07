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
                        <source src="${get_videos_path('Chest', 'banded_er.mp4')}" type="video/mp4" />
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
            <div class="grupo-muscular">
                <h4>PECHO</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="lunes1-ej2" onchange="tacharEjercicio('lunes1-ej2')" />
                    <label for="lunes1-ej2"><strong>Thumbs Up DB Incline Bench (Press Inclinado con Mancuernas)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Chest', 'thumbs_up_db_incline.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho superior (porción clavicular del pectoral mayor).</p>
                    <p><strong>Series:</strong> 3 series.</p>
                    <p><strong>Reps:</strong> 8-10 repeticiones hasta el fallo técnico.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>En un banco inclinado, sostén las mancuernas con los pulgares hacia arriba (agarre semi-supino).</li>
                        <li>Baja controladamente hasta que los codos estén en línea con el pecho, luego sube acercando las mancuernas para maximizar la contracción.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Enfoca la porción superior del pecho, clave para un desarrollo estético equilibrado. El agarre con pulgares arriba reduce el estrés en los hombros.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="lunes1-ej3" onchange="tacharEjercicio('lunes1-ej3')" />
                    <label for="lunes1-ej3"><strong>Cable Crossover (Press de Cable con Parciales)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Chest', 'cable_crossover.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho medio (porción esternal del pectoral mayor).</p>
                    <p><strong>Series:</strong> 3 series.</p>
                    <p><strong>Reps:</strong> 8-10 repeticiones hasta el fallo + parciales.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>En una polea, inclínate hacia adelante al abrir los brazos y hacia atrás al cruzarlos frente al cuerpo para aislar el pecho.</li>
                        <li>Tras el fallo, realiza repeticiones parciales en la posición más elongada (brazos abiertos) para aumentar la tensión.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Maximiza la contracción y el estiramiento del pecho medio, promoviendo hipertrofia mediante la tensión constante de las poleas.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="lunes1-ej4" onchange="tacharEjercicio('lunes1-ej4')" />
                    <label for="lunes1-ej4"><strong>Dip Ladder / Weighted Dips (Fondos en Paralelas con Escalera)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Chest', 'dip_ladder.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho inferior (porción abdominal del pectoral mayor).</p>
                    <p><strong>Series:</strong> 1 serie.</p>
                    <p><strong>Reps:</strong> Hasta el fallo absoluto con escalera de retención.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Usa peso adicional si es posible. Baja lentamente hasta una profundidad cómoda, evitando llevar los codos demasiado atrás.</li>
                        <li>Realiza 1 repetición completa + media repetición (baja a mitad, sube, baja completamente). Incrementa el tiempo en la posición baja (1 seg, 2 seg, etc.).</li>
                    </ul>
                    <p><strong>Importancia:</strong> Enfoca intensamente el pecho inferior con un movimiento compuesto. La escalera de retención maximiza el tiempo bajo tensión.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="lunes1-ej5" onchange="tacharEjercicio('lunes1-ej5')" />
                    <label for="lunes1-ej5"><strong>Pushup Ladder (Flexiones Déficit con Escalera 1.5 Reps)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Chest', 'flexiones_deficit.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho medio e inferior.</p>
                    <p><strong>Series:</strong> 1 serie.</p>
                    <p><strong>Reps:</strong> Hasta el fallo absoluto.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Coloca las manos sobre plataformas para mayor rango de movimiento.</li>
                        <li>Realiza 1 repetición completa + media repetición (baja a mitad, sube, baja completamente). Incrementa el tiempo en la posición baja (1 seg, 2 seg, etc.).</li>
                        <li>Continúa hasta el fallo absoluto.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Agota el pecho con un ejercicio de peso corporal, aprovechando el rango ampliado y la retención para maximizar la hipertrofia.</p>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>HOMBROS</h4>
                <div class="triserie">
                    <div class="ejercicio">
                        <input type="checkbox" id="lunes1-ej6" onchange="tacharEjercicio('lunes1-ej6')" />
                        <label for="lunes1-ej6"><strong>Press Militar de Pie</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="lunes1-ej7" onchange="tacharEjercicio('lunes1-ej7')" />
                        <label for="lunes1-ej7"><strong>Press Unilateral de Pie</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="lunes1-ej8" onchange="tacharEjercicio('lunes1-ej8')" />
                        <label for="lunes1-ej8"><strong>Push Press con Mancuernas</strong></label>
                    </div>
                    <details>
                        <summary>Detalles de la Triserie</summary>
                        <br>
                        <p><strong>Series:</strong> 3 series (los tres ejercicios seguidos sin descanso)</p>
                        <br>
                        <p><strong>Descripción:</strong> Realiza el Press Militar de Pie, seguido inmediatamente por el Press Unilateral de Pie, y termina con el Push Press con Mancuernas. Descansa después de completar los tres ejercicios.</p>
                        <br>
                        <strong>-------------------------</strong>
                        <br>
                        <p><strong>Reps Press Militar:</strong> 10 repeticiones</p>
                        <p><strong>Zona del Hombro (Press Militar):</strong> Anterior y Medial</p>
                        <p><strong>Ejecución Press Militar:</strong></p>
                        <ul>
                            <li>Usa peso elevado, realiza el press por encima de la cabeza sin respaldo.</li>
                            <li>Mantén control total del movimiento.</li>
                        </ul>
                        <br>
                        <strong>-------------------------</strong>
                        <br>
                        <p><strong>Reps Press Unilateral:</strong> 6 repeticiones</p>
                        <p><strong>Zona del Hombro (Press Unilateral):</strong> Anterior</p>
                        <p><strong>Ejecución Press Unilateral:</strong></p>
                        <ul>
                            <li>Realiza el movimiento alternando cada brazo, mantén el core activado.</li>
                            <li>Mejora equilibrio y trabaja asimetrías.</li>
                        </ul>
                        <br>
                        <strong>-------------------------</strong>
                        <br>
                        <p><strong>Reps Push Press:</strong> 8 repeticiones</p>
                        <p><strong>Zona del Hombro (Push Press):</strong> Anterior y Medial</p>
                        <p><strong>Ejecución Push Press:</strong></p>
                        <ul>
                            <li>Usa un ligero impulso de piernas para elevar mancuernas.</li>
                            <li>Aprovecha la explosividad del movimiento para manejar pesos mayores.</li>
                        </ul>
                        <br>
                        <p><strong>Video de la Triserie:</strong></p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('Shoulder', 'dumbbell_standing_overhead_press.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <br>
                    </details>
                </div>
            </div>
            <div class="grupo-muscular">
                <h4>TRÍCEPS</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="lunes1-ej9" onchange="tacharEjercicio('lunes1-ej9')" />
                    <label for="lunes1-ej9"><strong>Pullover PJR (con mancuerna)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Triceps', 'pullover_PJR.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Zona:</strong> Cabeza larga del tríceps y dorsales (asistentes).</p>
                    <p><strong>Series:</strong> 3-4 series.</p>
                    <p><strong>Reps:</strong> 8-12 repeticiones.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Acostado, baja la mancuerna como si fuera un pullover.</li>
                        <li>Luego sube extendiendo los codos, enfocándote en la extensión.</li>
                    </ul>
                    <p><strong>Por qué es bueno:</strong> Gran sobrecarga, activa la cabeza larga al máximo con ayuda de dorsales en la parte excéntrica.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="lunes1-ej10" onchange="tacharEjercicio('lunes1-ej10')" />
                    <label for="lunes1-ej10"><strong>Triceps Bodyweight Trunk Lift (Elevación de tronco para tríceps)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <br>
                    <p><strong>Explicacion:</strong></p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Triceps', 'triceps_bodyweight_trunk_lift_explicacion.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <br>
                    <br>
                    <p><strong>Ejecucion:</strong></p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Triceps', 'triceps_bodyweight_trunk_lift_ejecucion.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <br>
                    <p><strong>Zona:</strong> Cabeza larga del tríceps.</p>
                    <p><strong>Series:</strong> 3-4 series.</p>
                    <p><strong>Reps:</strong> 10-15 repeticiones (al fallo).</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Puños cerrados, codos al suelo, eleva el torso extendiendo los codos.</li>
                        <li>Controla la bajada.</li>
                    </ul>
                    <p><strong>Por qué es bueno:</strong> Trabajo sin peso, excelente activación de la cabeza larga gracias a la extensión del brazo detrás del cuerpo.</p>
                </details>
            </div>
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
            <div class="grupo-muscular">
                <div class="biserie">
                    <h4>BISERIE</h4>
                    <div class="ejercicio">
                        <input type="checkbox" id="dia2-ej3" onchange="tacharEjercicio('dia2-ej3')" />
                        <label for="dia2-ej3"><strong>Sentadilla Búlgara con Mancuerna</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="dia2-ej4" onchange="tacharEjercicio('dia2-ej4')" />
                        <label for="dia2-ej4"><strong>Extensiones de Cuádriceps (con rotación de pies)</strong></label>
                    </div>
                    <details>
                        <summary>Detalles de la Biserie</summary>
                        <p><strong>Sentadilla Búlgara con Mancuerna:</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('martes', 'sentadilla_bulgara.mp4')}" type="video/mp4" />
                            <source src="${get_videos_path('martes', 'sentadilla_bulgara.webm')}" type="video/webm" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Parte trabajada:</strong> Cuádriceps, glúteos</p>
                        <p><strong>Series:</strong> 4 series</p>
                        <p><strong>Reps:</strong> 6 repeticiones por pierna</p>
                        <p><strong>Enfoque:</strong> Trabajo unilateral brutal.</p>
                        <p><strong>Beneficio:</strong></p>
                        <ul>
                            <li>Aísla cuádriceps y glúteo de forma intensa.</li>
                            <li>Estabilidad y control = más conexión y crecimiento.</li>
                            <li>Puedes usar banco bajo o step.</li>
                        </ul>
                        <p><strong>Tip:</strong> Mantén el torso levemente inclinado hacia el frente para más glúteo.</p>
                        <p><strong>Extensiones de Cuádriceps (con rotación de pies):</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('martes', 'extensiones_cuadriceps.mp4')}" type="video/mp4" />
                            <source src="${get_videos_path('martes', 'extensiones_cuadriceps.webm')}" type="video/webm" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Parte trabajada:</strong> Cuádriceps</p>
                        <p><strong>Series:</strong> 4 series</p>
                        <p><strong>Reps:</strong></p>
                        <ul>
                            <li>10 repeticiones con puntas ligeramente hacia afuera</li>
                            <li>10 repeticiones con puntas al frente</li>
                        </ul>
                        <p><strong>Enfoque:</strong> Aislamiento y tiempo bajo tensión.</p>
                        <p><strong>Beneficio:</strong></p>
                        <ul>
                            <li>Estimulas diferentes porciones del cuádriceps.</li>
                            <li>Más control y congestión brutal.</li>
                        </ul>
                        <p><strong>Por qué es clave:</strong> Excelente para terminar de "pulir" el cuádriceps y activar fibras que no se trabajan en compuestos.</p>
                    </details>
                </div>
                <h4>Prensa</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="dia2-ej2" onchange="tacharEjercicio('dia2-ej2')" />
                    <label for="dia2-ej2"><strong>Prensa 45 Grados</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('martes', 'sentadilla_con_barra.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Cuádriceps, glúteos, femorales</p>
                    <p><strong>Series:</strong> 3 series</p>
                    <p><strong>Reps:</strong> 10 reps con piernas <strong>abiertas</strong> / 10 reps <strong>cortas</strong> con piernas casi cerradas (sin sacar pies)</p>
                    <p><strong>Beneficio:</strong></p>
                    <ul>
                        <li>Estimula cuádriceps y glúteo desde diferentes ángulos.</li>
                        <li>Las reps cortas finales destruyen las fibras agotadas.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Ejercicio compuesto clave para fuerza y masa en las piernas, activando múltiples grupos musculares.</p>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>BISERIE</h4>
                <div class="biserie">
                    <div class="ejercicio">
                        <input type="checkbox" id="dia2-ej5" onchange="tacharEjercicio('dia2-ej5')" />
                        <label for="dia2-ej5"><strong>Sentadilla Sumo con Mancuernas</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="dia2-ej6" onchange="tacharEjercicio('dia2-ej6')" />
                        <label for="dia2-ej6"><strong>Pasadas (Tijeras Caminando)</strong></label>
                    </div>
                    <details>
                        <summary>Detalles de la Biserie</summary>
                        <p><strong>Sentadilla Sumo con Mancuernas:</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('martes', 'sentadilla_sumo.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Parte trabajada:</strong> Aductores, glúteos</p>
                        <p><strong>Series:</strong> 2 series</p>
                        <p><strong>Reps:</strong> 12 repeticiones</p>
                        <p><strong>Ejecución:</strong></p>
                        <ul>
                            <li>Piernas bien abiertas, bajada profunda.</li>
                            <li>Trabaja aductores y glúteo a lo bestia.</li>
                        </ul>
                        <p><strong>Pasadas (Tijeras Caminando):</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('martes', 'pasadas.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Parte trabajada:</strong> Glúteos, femorales</p>
                        <p><strong>Series:</strong> 2 series</p>
                        <p><strong>Reps:</strong> 8 pasos ida + 8 pasos vuelta</p>
                        <p><strong>Ejecución:</strong></p>
                        <ul>
                            <li>Estímulo unilateral y movilidad.</li>
                            <li>Ideal para cerrar con bomba total sin maquinaria.</li>
                        </ul>
                        <p><strong>Importancia:</strong> No descanses entre sumo y pasadas. Vas directo. Esto da un pico de activación muscular y metabólica.</p>
                    </details>
                </div>
            </div>
            <div class="grupo-muscular">
                <h4>PANTORRILLAS</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="dia2-ej7" onchange="tacharEjercicio('dia2-ej7')" />
                    <label for="dia2-ej7"><strong>Elevación de Talones (en prensa o de pie)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('martes', 'elevacion_talones.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pantorrillas</p>
                    <p><strong>Series:</strong> 3 series</p>
                    <p><strong>Reps:</strong> 15-20 repeticiones</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Pausa de 1-2 segundos arriba.</li>
                        <li>Bajada lenta y completa para estiramiento real.</li>
                        <li>Si lo haces en prensa, controla que no se levante el talón de la máquina.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Más control = más estímulo.</p>
                </details>
            </div>
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
                        <source src="${get_videos_path('Back', 'face_pulls.mp4')}" type="video/mp4" />
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
                <div class="ejercicio">
                    <input type="checkbox" id="dia3-ej2" onchange="tacharEjercicio('dia3-ej2')" />
                    <label for="dia3-ej2"><strong>Chin-Up (Dominada Supinada)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'chin_up.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Zonas trabajadas:</strong> Cabeza larga y corta del bíceps, braquial</p>
                    <p><strong>Series:</strong> 2 series (una isométrica y una dinámica)</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li><strong>Isométrico + Excéntrico:</strong> Mantente con la barbilla sobre la barra durante 10–20 segundos y baja lentamente (3–5 reps).</li>
                        <li><strong>Dinámico:</strong> Repeticiones completas manteniendo un ángulo de codo abierto (~90º) para aislar el bíceps y no los dorsales.</li>
                    </ul>
                    <p><strong>Beneficios:</strong></p>
                    <ul>
                        <li>Activa todas las funciones del bíceps.</li>
                        <li>Ideal para “despertar” fibras musculares profundas.</li>
                        <li>Estimula fuerza real con peso corporal.</li>
                    </ul>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>EJERCICIOS PRINCIPALES DE ESPALDA</h4>
                <blockquote>
                    <p><strong>Objetivo:</strong> Llegar a 20 repeticiones efectivas por ejercicio, divididas en bloques con pausas cortas para volver al estado de fatiga máxima. Esta técnica se enfoca en la intensidad y acumulación de fatiga, maximizando la hipertrofia con series densas y controladas.</p>
                    <p><strong>¿Cómo funciona?</strong></p>
                    <ul>
                        <li>Realiza una “Ignition Set”: 12 repeticiones al fallo.</li>
                        <li>Luego, descansa 15 segundos.</li>
                        <li>Después, comienza la fase de repeticiones efectivas: Por ejemplo, 5 repeticiones + 10 seg de descanso + 5 + 10 seg + ... hasta llegar a 20.</li>
                        <li>El número de repeticiones puede variar según la fatiga (ej: 7+7+6 también es válido).</li>
                    </ul>
                </blockquote>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3-ej3" onchange="tacharEjercicio('dia3-ej3')" />
                    <label for="dia3-ej3"><strong>Barbell Rows (Remo con Barra)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'barbell_rows.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Músculos trabajados:</strong> Espalda media, dorsales, romboides, trapecios, erectores espinales</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Carga moderadamente pesada.</li>
                        <li>Mantén el torso inclinado, sin arquear la espalda.</li>
                        <li>Enfócate en una contracción fuerte en la parte final del movimiento.</li>
                    </ul>
                    <p><strong>Ignition Set:</strong> 12 repeticiones al fallo</p>
                    <p><strong>20 Reps Efectivas:</strong> Divididas en bloques (ej. 5 + 5 + 5 + 5) with 10 seg entre bloques</p>
                    <p><strong>Importancia:</strong> Base de la fuerza horizontal para toda la espalda. Movimiento clave y pesado para iniciar.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3-ej4" onchange="tacharEjercicio('dia3-ej4')" />
                    <label for="dia3-ej4"><strong>Lat Pulldowns (Agarre Ancho)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'lat_pull_down_wide.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Músculos trabajados:</strong> Dorsales y redondo mayor</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Usa un agarre amplio en la barra recta.</li>
                        <li>Saca los codos bien al frente al subir para exagerar el estiramiento de los dorsales.</li>
                        <li>Contrae al máximo al bajar.</li>
                    </ul>
                    <p><strong>Ignition Set:</strong> 12 repeticiones al fallo</p>
                    <p><strong>20 Reps Efectivas:</strong> Divididas con pausas de 10 seg</p>
                    <p><strong>Importancia:</strong> El estiramiento controlado del dorsal mejora el crecimiento muscular. Agarre amplio activa más el redondo mayor.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3-ej5" onchange="tacharEjercicio('dia3-ej5')" />
                    <label for="dia3-ej5"><strong>Seated Cable Rows Wide (Remo con Cable Sentado con Codos Anchos)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'seated_cable_rows_wide.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Músculos trabajados:</strong> Espalda superior y deltoides posteriores</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Codos hacia afuera, abre bien el pecho.</li>
                        <li>Tira hacia la base del pecho sin perder tensión.</li>
                        <li>Mantén el control en la fase excéntrica.</li>
                    </ul>
                    <p><strong>Ignition Set:</strong> 12 repeticiones al fallo</p>
                    <p><strong>20 Reps Efectivas:</strong> Divididas con pausas de 10 seg</p>
                    <p><strong>Importancia:</strong> Excelente para estimular la parte alta de la espalda y mejorar el grosor escapular.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3-ej6" onchange="tacharEjercicio('dia3-ej6')" />
                    <label for="dia3-ej6"><strong>DB High Pulls (Jalón Alto con Mancuernas)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'db_high_pulls.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Músculos trabajados:</strong> Trapecios, deltoides posteriores, espalda alta</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Eleva las mancuernas manteniendo las muñecas por encima de los codos.</li>
                        <li>No conviertas el ejercicio en un remo erguido.</li>
                        <li>Controla y detente si la forma se deteriora.</li>
                    </ul>
                    <p><strong>Ignition Set:</strong> 12 repeticiones al fallo</p>
                    <p><strong>20 Reps Efectivas:</strong> Mismo patrón: bloques con pausas de 10 seg</p>
                    <p><strong>Importancia:</strong> Mejora la fuerza escapular y la salud de los hombros. Excelente para reforzar la postura.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3-ej7" onchange="tacharEjercicio('dia3-ej7')" />
                    <label for="dia3-ej7"><strong>Jalón ROM (Agarre Inverso con Enfoque en Elongación)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'jalon_rom_inverse.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Músculos trabajados:</strong> Dorsales con énfasis en elongación</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Agarre supino (palmas hacia ti).</li>
                        <li>Baja la barra hasta el pecho, sube completamente para estirar los dorsales al máximo.</li>
                        <li>Haz una pausa breve en la parte más alta de cada repetición para reforzar la elongación.</li>
                    </ul>
                    <p><strong>Ignition Set:</strong> 12 repeticiones moderadas (no tan pesadas por estar al final)</p>
                    <p><strong>20 Reps Efectivas:</strong> Realiza bloques pausados como antes, manteniendo la pausa en estiramiento</p>
                    <p><strong>Importancia:</strong> Activa fibras que muchas veces no se trabajan. Crucial al final por su foco en estiramiento + control.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3-ej8" onchange="tacharEjercicio('dia3-ej8')" />
                    <label for="dia3-ej8"><strong>Inverted Rows (Remo Invertido con Peso Corporal)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'inverted_rows.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Músculos trabajados:</strong> Espalda media, deltoides posteriores, romboides</p>
                    <p><strong>Ejecución especial:</strong></p>
                    <ul>
                        <li>Lleva el pecho lo más cerca posible de la barra.</li>
                        <li>Mantente en la posición alta de la repetición por 5 segundos.</li>
                        <li>Baja lentamente.</li>
                        <li>Repite.</li>
                    </ul>
                    <p><strong>Técnica:</strong> Escalera de retención estática</p>
                    <p><strong>Reps:</strong> No se cuentan repeticiones, sino tiempo bajo tensión</p>
                    <p><strong>Importancia:</strong> Ejercicio fundamental para corregir posturas encorvadas y fortalecer la resistencia de los músculos posturales.</p>
                </details>
                <blockquote>
                    <p><strong>Ejemplo de Repeticiones Efectivas:</strong></p>
                    <ul>
                        <li>12 reps al fallo (Ignition Set)</li>
                        <li>15 seg de descanso</li>
                        <li>5 reps → 10 seg pausa</li>
                        <li>5 reps → 10 seg pausa</li>
                        <li>5 reps → 10 seg pausa</li>
                        <li>5 reps → ¡Listo! 20 reps efectivas acumuladas</li>
                    </ul>
                    <p>Si no puedes mantener 5 reps por bloque, ajusta: 7 + 7 + 6, 6 + 6 + 5 + 3, etc. Lo importante es que las repeticiones se mantengan exigentes.</p>
                </blockquote>
            </div>
            <div class="grupo-muscular">
                <h4>BÍCEPS</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3-ej9" onchange="tacharEjercicio('dia3-ej9')" />
                    <label for="dia3-ej9"><strong>Dumbbell Curl (Curl con Mancuernas) – Tempo Lento</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Biceps', 'dumbbell_curl.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Zonas trabajadas:</strong> Cabeza corta (principal), cabeza larga y braquial (secundarios)</p>
                    <p><strong>Series y repeticiones:</strong> 3 series de 10–12 reps</p>
                    <p><strong>Tempo recomendado:</strong> 3 segundos arriba / 3 segundos abajo</p>
                    <p><strong>Técnica:</strong></p>
                    <ul>
                        <li>De pie, con los codos pegados al torso.</li>
                        <li>Eleva con supinación completa y baja controladamente.</li>
                    </ul>
                    <p><strong>Beneficios:</strong></p>
                    <ul>
                        <li>Aísla el bíceps con tensión constante.</li>
                        <li>Mejora conexión mente-músculo.</li>
                        <li>Evita el uso de impulso.</li>
                    </ul>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3-ej10" onchange="tacharEjercicio('dia3-ej10')" />
                    <label for="dia3-ej10"><strong>Cable Stretch Drag Curl (Curl de arrastre en polea baja)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Biceps', 'cable_stretch_drag_curl.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Zonas trabajadas:</strong> Principalmente cabeza larga del bíceps</p>
                    <p><strong>Series y repeticiones:</strong> 3 series de 8–10 reps</p>
                    <p><strong>Técnica:</strong></p>
                    <ul>
                        <li>Usa un cable en polea baja.</li>
                        <li>Arrastra el mango a lo largo del cuerpo manteniendo los codos hacia atrás.</li>
                    </ul>
                    <p><strong>Beneficios:</strong></p>
                    <ul>
                        <li>Estiramiento máximo al inicio del movimiento.</li>
                        <li>Tensión continua gracias al cable.</li>
                        <li>Mayor activación del “pico” del bíceps.</li>
                    </ul>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>CONSEJO FINAL</h4>
                <blockquote>
                    <p>Esta rutina <strong>no requiere muchas series por ejercicio</strong>. Cada bloque efectivo ya representa una carga brutal. Enfócate en la ejecución perfecta y el control del tiempo bajo tensión.</p>
                </blockquote>
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
                    <video controls>
                        <source src="${get_videos_path('Chest', 'band_pull_apart.mp4')}" type="video/mp4" />
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
            <div class="grupo-muscular">
                <h4>PECHO</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5-ej2" onchange="tacharEjercicio('dia5-ej2')" />
                    <label for="dia5-ej2"><strong>DB Bench Press (Press de Banca con Mancuernas en Banco Plano)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls>
                        <source src="${get_videos_path('Chest', 'db_bench_press.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho medio (porción esternal del pectoral mayor)</p>
                    <p><strong>Series:</strong> 3 series</p>
                    <p><strong>Reps:</strong> 8-10 repeticiones hasta el fallo técnico</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>En un banco plano, baja las mancuernas controladamente hasta que los codos estén en línea con el pecho.</li>
                        <li>Sube con fuerza, manteniendo la técnica para maximizar el estímulo muscular.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Movimiento fundamental para desarrollar fuerza y masa en el pecho medio, con mayor rango de movimiento que el press con barra.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5-ej3" onchange="tacharEjercicio('dia5-ej3')" />
                    <label for="dia5-ej3"><strong>DB Floor Flys (Fly con Mancuernas en el Suelo)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls>
                        <source src="${get_videos_path('Chest', 'db_floor_flys.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho medio</p>
                    <p><strong>Series:</strong> 3 series</p>
                    <p><strong>Reps:</strong> 8-10 repeticiones + excéntricas al fallo</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Acuéstate en el suelo, baja las mancuernas lentamente hasta que los codos toquen suavemente el suelo.</li>
                        <li>Tras las repeticiones completas, realiza bajadas excéntricas lentas (subiendo recto y bajando controlado).</li>
                    </ul>
                    <p><strong>Importancia:</strong> Aísla el pecho medio con un estiramiento seguro, limitado por el suelo, ideal para hipertrofia.</p>
                    <p><strong>Variante:</strong> Peck Deck.</p>
                    <p><strong>Foto:</strong></p>
                    <img src="${get_image_path('viernes', 'pec_deck.png')}" alt="Pec Deck" width="320" height="240" />
                    <p><strong>Descripción:</strong> Siéntate en la máquina Peck Deck con los codos a la altura de los hombros y los antebrazos apoyados en las almohadillas. Junta las almohadillas frente a tu pecho, enfocándote en la contracción del pectoral, y regresa lentamente a la posición inicial para maximizar el estiramiento.</p>
                    <p><strong>Enfoque:</strong> Trabajo de aislamiento para el pecho, con énfasis en la contracción y el estiramiento.</p>
                    <p><strong>Beneficio:</strong> La máquina permite un movimiento controlado que aísla el pecho, minimizando la intervención de otros músculos. Es ideal para trabajar la parte media del pectoral con seguridad.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5-ej4" onchange="tacharEjercicio('dia5-ej4')" />
                    <label for="dia5-ej4"><strong>High to Low Crossovers (Cruces en Polea Alta a Baja)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls>
                        <source src="${get_videos_path('Chest', 'high_to_low_crossovers.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho inferior</p>
                    <p><strong>Series:</strong> 3 series</p>
                    <p><strong>Reps:</strong> 10-12 repeticiones hasta el fallo + parciales</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>En una polea alta, cruza las manos en la parte baja del movimiento para maximizar la contracción.</li>
                        <li>Tras el fallo, realiza repeticiones parciales en la posición baja.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Enfoca el pecho inferior con tensión constante, complementando ejercicios compuestos.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5-ej5" onchange="tacharEjercicio('dia5-ej5')" />
                    <label for="dia5-ej5"><strong>Prision Yard Push Up (Flexiones con Tensión Continua)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls>
                        <source src="${get_videos_path('Chest', 'prision_yard_push_up.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho completo (énfasis en tensión continua)</p>
                    <p><strong>Series:</strong> 1 serie</p>
                    <p><strong>Reps:</strong> Hasta el fallo absoluto</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Realiza flexiones a un ritmo rápido sin subir completamente, manteniendo tensión constante en el pecho.</li>
                        <li>Continúa hasta el fallo absoluto.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Agota el pecho al final de la sesión, maximizando la fatiga muscular con un ejercicio de peso corporal.</p>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>HOMBROS</h4>
                <div class="biserie">
                    <div class="ejercicio">
                        <input type="checkbox" id="dia5-ej6" onchange="tacharEjercicio('dia5-ej6')" />
                        <label for="dia5-ej6"><strong>Elevación Lateral con Trampa</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="dia5-ej7" onchange="tacharEjercicio('dia5-ej7')" />
                        <label for="dia5-ej7"><strong>Elevación Lateral Estricta 1½</strong></label>
                    </div>
                    <details>
                        <summary>Detalles de la Biserie</summary>
                        <p><strong>Elevación Lateral con Trampa:</strong></p>
                        <p>Video:</p>
                        <video controls>
                            <source src="${get_videos_path('Shoulder', 'lateral_raise_cheat.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Zona del Hombro:</strong> Medial</p>
                        <p><strong>Series:</strong> 3 series</p>
                        <p><strong>Reps:</strong> 10 (peso alto)</p>
                        <p><strong>Ejecución:</strong></p>
                        <ul>
                            <li>Usa un ligero impulso controlado para levantar la mancuerna.</li>
                            <li>Enfócate en la bajada lenta para aprovechar la tensión excéntrica.</li>
                        </ul>
                        <p><strong>Elevación Lateral Estricta 1½:</strong></p>
                        <p>Video:</p>
                        <video controls>
                            <source src="${get_videos_path('Shoulder', 'lateral_raise_strict.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Zona del Hombro:</strong> Medial</p>
                        <p><strong>Series:</strong> 3 series</p>
                        <p><strong>Reps:</strong> 6 (peso bajo)</p>
                        <p><strong>Ejecución:</strong></p>
                        <ul>
                            <li>Levanta completamente, baja a mitad de camino y vuelve a subir antes de bajar totalmente.</li>
                            <li>Mantén constante tensión muscular.</li>
                        </ul>
                        <p><strong>Importancia:</strong> Combina fuerza con control para maximizar la hipertrofia del deltoides medial.</p>
                    </details>
                </div>
            </div>
            <div class="grupo-muscular">
                <h4>TRÍCEPS</h4>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5-ej8" onchange="tacharEjercicio('dia5-ej8')" />
                    <label for="dia5-ej8"><strong>Rotational Triceps Pushdown (Jalón de Tríceps con Rotación)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls>
                        <source src="${get_videos_path('Triceps', 'rotational_triceps_pushdown_explicacion.mp4')}" type="video/mp4" />
                        <source src="${get_videos_path('Triceps', 'rotational_triceps_pushdown_ejecucion.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Zona:</strong> Cabeza larga (principal), también medial y lateral</p>
                    <p><strong>Series:</strong> 3-4 series</p>
                    <p><strong>Reps:</strong> 10-12 repeticiones por lado</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Usa cuerda o barra, gira ligeramente al final del jalón.</li>
                        <li>Lleva los brazos hacia atrás al final del movimiento.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Permite llevar el brazo hacia extensión del hombro, lo que estimula mejor la cabeza larga.</p>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5-ej9" onchange="tacharEjercicio('dia5-ej9')" />
                    <label for="dia5-ej9"><strong>Cable Overhead Triceps Extension (Extensión con Cable)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls>
                        <source src="${get_videos_path('Triceps', 'cable_overhead_triceps_extension.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Zona:</strong> Principalmente cabeza larga</p>
                    <p><strong>Series:</strong> 3-4 series</p>
                    <p><strong>Reps:</strong> 12-15 repeticiones</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Coloca el cable en posición baja.</li>
                        <li>Baja hacia frente/cabeza como una extensión, manteniendo tensión constante.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Mejora la resistencia en la parte final del movimiento donde normalmente se pierde tensión con mancuernas.</p>
                </details>
            </div>
        </div>
    `;
    return { title: 'Viernes: Pecho, Hombros y Tríceps', content: contenido };
}