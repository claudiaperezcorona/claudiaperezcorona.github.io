const sem2_content = `
    <ol class="space-y-4">
        <li class="bg-gradient-to-tr from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded px-6 py-4 shadow flex flex-col sm:flex-row justify-between items-center">
            <span class="font-semibold">Día 1: Espalda, Hombros y Bíceps (Lunes)</span>
            <button onclick="abrirModalRutina('dia1-sem2')" class="bg-blue-700 text-white px-4 py-2 rounded-lg shadow font-bold hover:bg-blue-800 transition text-base mt-2 sm:mt-0">
                ▶ Ver rutina
            </button>
        </li>
        <li class="bg-gradient-to-tr from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded px-6 py-4 shadow flex flex-col sm:flex-row justify-between items-center">
            <span class="font-semibold">Día 2: Piernas Completo, Pantorrilla (Martes)</span>
            <button onclick="abrirModalRutina('dia2-sem2')" class="bg-blue-700 text-white px-4 py-2 rounded-lg shadow font-bold hover:bg-blue-800 transition text-base mt-2 sm:mt-0">
                ▶ Ver rutina
            </button>
        </li>
        <li class="bg-gradient-to-tr from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded px-6 py-4 shadow flex flex-col sm:flex-row justify-between items-center">
            <span class="font-semibold">Día 3: Pecho y Tríceps (Miércoles)</span>
            <button onclick="abrirModalRutina('dia3-sem2')" class="bg-blue-700 text-white px-4 py-2 rounded-lg shadow font-bold hover:bg-blue-800 transition text-base mt-2 sm:mt-0">
                ▶ Ver rutina
            </button>
        </li>
        <li class="bg-gradient-to-tr from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded px-6 py-4 shadow flex flex-col sm:flex-row justify-between items-center">
            <span class="font-semibold">Día 4: Piernas y Abdominales (Jueves)</span>
            <button onclick="abrirModalRutina('dia4-sem2')" class="bg-blue-700 text-white px-4 py-2 rounded-lg shadow font-bold hover:bg-blue-800 transition text-base mt-2 sm:mt-0">
                ▶ Ver rutina
            </button>
        </li>
        <li class="bg-gradient-to-tr from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded px-6 py-4 shadow flex flex-col sm:flex-row justify-between items-center">
            <span class="font-semibold">Día 5: Espalda y Bíceps (Viernes)</span>
            <button onclick="abrirModalRutina('dia5-sem2')" class="bg-blue-700 text-white px-4 py-2 rounded-lg shadow font-bold hover:bg-blue-800 transition text-base mt-2 sm:mt-0">
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


function cargarContenidoModalRutinaDia1Sem2() {
    const contenido = `
        <div class="rutina-vintage">
            <div class="grupo-muscular">
                <h4>CALENTAMIENTO</h4>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia1sem2-ej1" onchange="tacharEjercicio('dia1sem2-ej1')" />
                    <label for="dia1sem2-ej1"><strong>Scap Pulldown Primer (Jalón de Escápulas)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'scap_pulldown_primer.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Cintura escapular, preparación de hombros y control escapular.</p>
                    <p><strong>Series:</strong> 1-2 series</p>
                    <p><strong>Reps:</strong> 10-15, sin fatiga extrema.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Máquina de jalón, carga ligera.</li>
                        <li>Codos bloqueados, jala la barra enfocando el movimiento únicamente en las escápulas.</li>
                        <li>Luego realiza jalones completos con control.</li>
                    </ul>
                </details>
                <div class="ejercicio">
                    <input type="checkbox" id="dia1sem2-ej2" onchange="tacharEjercicio('dia1sem2-ej2')" />
                    <label for="dia1sem2-ej2"><strong>Face Pulls</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'face_pulls.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Zona del Hombro:</strong> Posterior</p>
                    <p><strong>Series:</strong> 3 series</p>
                    <p><strong>Reps:</strong> 12-15 repeticiones</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Realiza el movimiento tirando la cuerda hacia la cara.</li>
                        <li>Mantén los codos altos y retrae los omóplatos para activar el deltoides posterior.</li>
                    </ul>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>EJERCICIOS PRINCIPALES</h4>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia1sem2-ej3" onchange="tacharEjercicio('dia1sem2-ej3')" />
                    <label for="dia1sem2-ej3"><strong>Seated Cable Rows Wide (Remo con Cable Sentado con Codos Anchos)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'seated_cable_rows_wide.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Espalda superior y deltoides posteriores.</p>
                    <p><strong>Series:</strong> 2-3 series</p>
                    <p><strong>Reps:</strong> 6-8 repeticiones hasta el fallo técnico 🔥.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Usa agarre amplio, manteniendo los codos elevados durante todo el movimiento.</li>
                        <li>Controla cada repetición y carga suficiente peso para sentir la tensión muscular.</li>
                    </ul>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia1sem2-ej4" onchange="tacharEjercicio('dia1sem2-ej4')" />
                    <label for="dia1sem2-ej4"><strong>Lat Pulldowns Narrow Grip (Jalón de Dorsales con Agarre Estrecho)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'lat_pulldowns_narrow.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Dorsales (Latissimus dorsi).</p>
                    <p><strong>Series:</strong> 2-3 series</p>
                    <p><strong>Reps:</strong> 10-12 repeticiones hasta el fallo 🔥, más parciales.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Usa una barra corta o agarre tipo tríceps.</li>
                        <li>Extiende bien los codos al frente para maximizar el estiramiento.</li>
                        <li>Al llegar al fallo, continúa con parciales en posición superior (máximo estiramiento).</li>
                    </ul>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia1sem2-ej5" onchange="tacharEjercicio('dia1sem2-ej5')" />
                    <label for="dia1sem2-ej5"><strong>Straight Arm Pushdowns (Empuje Abajo con Brazos Rectos)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'straight_arm_pushdowns.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Fuerza escapular y dorsales.</p>
                    <p><strong>Series:</strong> 2-3 series</p>
                    <p><strong>Reps:</strong> 8-10 al fallo concéntrico 🔥 + excéntricas asistidas al fallo 🔥.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Conecta mentalmente con los dorsales, evitando trabajar los tríceps inicialmente.</li>
                        <li>Después del fallo concéntrico, usa ligeramente los tríceps para hacer excéntricas controladas.</li>
                    </ul>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia1sem2-ej6" onchange="tacharEjercicio('dia1sem2-ej6')" />
                    <label for="dia1sem2-ej6"><strong>Pullups (Dominadas)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'pullups.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Ejercicio compuesto que involucra dorsales, brazos y hombros.</p>
                    <p><strong>Series:</strong> 1 serie hasta el fallo + parciales.</p>
                    <p><strong>Reps:</strong> Al fallo absoluto 🔥.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Realiza 1 serie con peso corporal o banda asistida hasta el fallo absoluto.</li>
                        <li>Tras el fallo, continúa con repeticiones parciales hasta el agotamiento.</li>
                    </ul>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>HOMBROS</h4>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia1sem2-ej7" onchange="tacharEjercicio('dia1sem2-ej7')" />
                    <label for="dia1sem2-ej7"><strong>Cruz de Hierro (Iron Cross Finisher)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Shoulder', 'iron_cross.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Series:</strong> 3 series</p>
                    <p><strong>Reps:</strong> Al fallo 🔥.</p>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia1sem2-ej8" onchange="tacharEjercicio('dia1sem2-ej8')" />
                    <label for="dia1sem2-ej8"><strong>Press hacia afuera</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Shoulder', 'press_hacia_afuera.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Series:</strong> 1 serie</p>
                    <p><strong>Reps:</strong> Al fallo 🔥.</p>
                    <p><strong>Beneficios:</strong></p>
                    <ul>
                        <li>Combina isométrico frontal y lateral.</li>
                        <li>Agota por completo deltoides anterior y medial.</li>
                        <li>Ideal para finalizar la rutina con máxima fatiga.</li>
                    </ul>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>BÍCEPS</h4>
                <br>
                <blockquote>
                    <p><strong>Objetivo:</strong> Aislar el bíceps con repeticiones lentas, enfatizando la contracción y el estiramiento profundo. Ideal para días de espalda donde se busca complementar sin agotar el SNC.</p>
                </blockquote>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia1sem2-ej9" onchange="tacharEjercicio('dia1sem2-ej9')" />
                    <label for="dia1sem2-ej9"><strong>Dumbbell Curl (Curl con Mancuernas) – Tempo Lento</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Biceps', 'dumbbell_curl.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Zonas trabajadas:</strong> Cabeza corta (principal), cabeza larga y braquial (secundarios).</p>
                    <p><strong>Series:</strong> 3 series</p>
                    <p><strong>Reps:</strong> 10-12 repeticiones</p>
                    <p><strong>Tempo recomendado:</strong> 3 segundos arriba / 3 segundos abajo</p>
                    <p><strong>Ejecución:</strong></p>
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
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia1sem2-ej10" onchange="tacharEjercicio('dia1sem2-ej10')" />
                    <label for="dia1sem2-ej10"><strong>Cable Stretch Drag Curl (Curl de arrastre en polea baja)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Biceps', 'cable_stretch_drag_curl.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Zonas trabajadas:</strong> Principalmente cabeza larga del bíceps.</p>
                    <p><strong>Series:</strong> 3 series</p>
                    <p><strong>Reps:</strong> 8-10 repeticiones</p>
                    <p><strong>Ejecución:</strong></p>
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
        </div>
    `;
    return { title: 'Lunes: Espalda, Hombros y Bíceps', content: contenido };
}


function cargarContenidoModalRutinaDia2Sem2() {
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

function cargarContenidoModalRutinaDia3Sem2() {
    const contenido = `
        <div class="rutina-vintage">
            <div class="grupo-muscular">
                <h4>CALENTAMIENTO</h4>
                <br>
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
                <h4>EJERCICIOS PRINCIPALES</h4>
                <br>
                <blockquote>
                    <p><strong>Objetivo:</strong> Alcanzar 20 repeticiones efectivas por ejercicio, divididas en bloques con pausas cortas para maximizar la fatiga y la hipertrofia.</p>
                    <br>
                    <p><strong>Técnica:</strong> Comienza con una <strong>Ignition Set</strong> (12 repeticiones al fallo), descansa 15 segundos, luego realiza bloques de repeticiones efectivas (ej., 5+5+5+5) con 10 segundos de pausa entre bloques, hasta llegar a 20.</p>
                    <br>
                </blockquote>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3sem2-ej1" onchange="tacharEjercicio('dia3sem2-ej1')" />
                    <label for="dia3sem2-ej1"><strong>DB Bench Press (Press de Banca con Mancuernas en Banco Plano)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Chest', 'db_bench_press.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho medio.</p>
                    <p><strong>Ignition Set:</strong> 12 repeticiones al fallo 🔥</p>
                    <p><strong>20 Reps Efectivas:</strong> Divididas en bloques (ej., 5+5+5+5) con 10 seg de pausa</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Usa un peso que permita 12 repeticiones al fallo en la Ignition Set.</li>
                        <li>Mantén los codos en línea con el pecho, controlando la bajada y subiendo con fuerza.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Base de fuerza para el pecho medio, con alta intensidad para hipertrofia.</p>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3sem2-ej2" onchange="tacharEjercicio('dia3sem2-ej2')" />
                    <label for="dia3sem2-ej2"><strong>Cable Crossover (Press de Cable con Parciales)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Chest', 'cable_crossover.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho medio.</p>
                    <p><strong>Ignition Set:</strong> 12 repeticiones al fallo 🔥</p>
                    <p><strong>20 Reps Efectivas:</strong> Divididas en bloques con 10 seg de pausa</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Inclínate hacia adelante al abrir los brazos y hacia atrás al cruzarlos.</li>
                        <li>Tras la Ignition Set, realiza bloques de repeticiones efectivas, manteniendo la tensión.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Maximiza la contracción y el estiramiento del pecho medio, ideal para definición muscular.</p>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3sem2-ej3" onchange="tacharEjercicio('dia3sem2-ej3')" />
                    <label for="dia3sem2-ej3"><strong>Thumbs Up DB Incline Bench (Press Inclinado con Mancuernas)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Chest', 'thumbs_up_db_incline.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho superior.</p>
                    <p><strong>Ignition Set:</strong> 12 repeticiones al fallo 🔥</p>
                    <p><strong>20 Reps Efectivas:</strong> Divididas en bloques con 10 seg de pausa</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Usa agarre con pulgares hacia arriba, acercando las mancuernas en la parte alta.</li>
                        <li>Mantén la técnica en los bloques efectivos para evitar fatiga prematura.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Enfoca el pecho superior, clave para un pecho equilibrado.</p>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3sem2-ej4" onchange="tacharEjercicio('dia3sem2-ej4')" />
                    <label for="dia3sem2-ej4"><strong>Dip Ladder / Weighted Dips (Fondos en Paralelas con Escalera)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Chest', 'dip_ladder.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho inferior.</p>
                    <p><strong>Ignition Set:</strong> 12 repeticiones al fallo 🔥</p>
                    <p><strong>10 Reps Efectivas:</strong> Con pausas en la posición baja</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Realiza 10 repeticiones efectivas (en lugar de 20), con una pausa de 1-2 segundos en la posición baja de cada repetición.</li>
                        <li>Divide en bloques (ej., 3+3+2+2) con 10 seg de pausa, manteniendo la pausa en la parte baja.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Enfoca el pecho inferior con alta intensidad, usando pausas para aumentar la tensión.</p>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia3sem2-ej5" onchange="tacharEjercicio('dia3sem2-ej5')" />
                    <label for="dia3sem2-ej5"><strong>Static Hold Pushups (Flexiones con Retención Estática)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Chest', 'static_hold_pushups.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Pecho completo.</p>
                    <p><strong>Ignition Set:</strong> 12 repeticiones al fallo 🔥</p>
                    <p><strong>20 Reps Efectivas:</strong> Con 5 seg de retención isométrica por repetición</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Realiza 20 repeticiones efectivas, manteniendo una retención isométrica de 5 segundos en la posición baja de cada repetición.</li>
                        <li>Divide en bloques con pausas de 10 segundos (ej., 5+5+5+5) según la fatiga.</li>
                        <li>No es necesario hacer todas de una vez; ajusta los bloques según tu capacidad.</li>
                    </ul>
                    <p><strong>Importancia:</strong> Agota el pecho con un ejercicio de peso corporal, maximizando la tensión isométrica para hipertrofia.</p>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>HOMBROS</h4>
                <div class="triserie">
                    <br>
                    <h5>🔥TRISERIE AL FALLO🔥</h5>
                    <br>
                    <div class="ejercicio">
                        <input type="checkbox" id="dia3sem2-ej6" onchange="tacharEjercicio('dia3sem2-ej6')" />
                        <label for="dia3sem2-ej6"><strong>Scoop Press</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="dia3sem2-ej7" onchange="tacharEjercicio('dia3sem2-ej7')" />
                        <label for="dia3sem2-ej7"><strong>Remo Alto con Mancuerna</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="dia3sem2-ej8" onchange="tacharEjercicio('dia3sem2-ej8')" />
                        <label for="dia3sem2-ej8"><strong>Press hacia Afuera</strong></label>
                    </div>
                    <details>
                        <summary>Detalles de la Triserie</summary>
                        <p><strong>🔥 Scoop Press:</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('Shoulder', 'scoop_press.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Zona del Hombro:</strong> Anterior</p>
                        <p><strong>Series:</strong> 3</p>
                        <p><strong>Reps:</strong> Al fallo 🔥</p>
                        <p><strong>Ejecución:</strong></p>
                        <ul>
                            <li>Mantén los codos fijos y presiona las mancuernas hacia adelante y arriba.</li>
                            <li>Continúa hasta alcanzar el fallo muscular.</li>
                        </ul>
                        <p><strong>🔥 Remo Alto con Mancuerna:</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('Shoulder', 'remo_alto_mancuerna.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Zona del Hombro:</strong> Medial</p>
                        <p><strong>Series:</strong> 3</p>
                        <p><strong>Reps:</strong> Al fallo 🔥</p>
                        <p><strong>Ejecución:</strong></p>
                        <ul>
                            <li>Eleva las mancuernas hacia arriba y afuera en una posición alta.</li>
                            <li>Controla bien el movimiento para máxima activación.</li>
                        </ul>
                        <p><strong>🔥 Press hacia Afuera:</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('Shoulder', 'press_hacia_afuera.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Zona del Hombro:</strong> Anterior y Medial</p>
                        <p><strong>Series:</strong> 3</p>
                        <p><strong>Reps:</strong> Al fallo 🔥</p>
                        <p><strong>Ejecución:</strong></p>
                        <ul>
                            <li>Presiona hacia afuera manteniendo tensión constante.</li>
                            <li>Ideal para finalizar y agotar completamente los músculos.</li>
                        </ul>
                    </details>
                </div>
            </div>
            <div class="grupo-muscular">
                <h4>TRÍCEPS</h4>
                <div class="triserie">
                    <br>
                    <h5>🔥 MECHANICAL DROP SET 🔥</h5>
                    <br>
                    <div class="ejercicio">
                        <input type="checkbox" id="dia3sem2-ej9" onchange="tacharEjercicio('dia3sem2-ej9')" />
                        <label for="dia3sem2-ej9"><strong>Extensión Recostado con Mancuernas</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="dia3sem2-ej10" onchange="tacharEjercicio('dia3sem2-ej10')" />
                        <label for="dia3sem2-ej10"><strong>Press JM</strong></label>
                    </div>
                    <div class="ejercicio">
                        <input type="checkbox" id="dia3sem2-ej11" onchange="tacharEjercicio('dia3sem2-ej11')" />
                        <label for="dia3sem2-ej11"><strong>Press de Banca Cerrado</strong></label>
                    </div>
                    <details>
                        <summary>Detalles del Mechanical Drop Set</summary>
                        <p><strong>🔥 Lying Triceps Extension (Extensión Recostado con Mancuernas):</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('Triceps', 'mechanical_drop_set_explicacion.mp4')}" type="video/mp4" />
                            <source src="${get_videos_path('Triceps', 'mechanical_drop_set_ejecucion.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>🔥 Press JM:</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('Triceps', 'modified_JM_press_explicacion.mp4')}" type="video/mp4" />
                            <source src="${get_videos_path('Triceps', 'modified_JM_press_ejecucion.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>🔥 Close Grip Bench Press (Press de Banca Cerrado):</strong></p>
                        <p>Video:</p>
                        <video controls width="320" height="240">
                            <source src="${get_videos_path('Triceps', 'mechanical_drop_set_explicacion.mp4')}" type="video/mp4" />
                            <source src="${get_videos_path('Triceps', 'mechanical_drop_set_ejecucion.mp4')}" type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                        <p><strong>Zona:</strong> Todo el tríceps (muy efectiva para agotar fibras)</p>
                        <p><strong>Series:</strong> 2-3 triseries completas, sin descanso</p>
                        <p><strong>Reps:</strong> Hasta el fallo 🔥 en cada fase (~8-12 reps por ejercicio)</p>
                        <p><strong>Por qué es bueno:</strong> Mantiene tensión mientras se reduce el ángulo mecánico; exprime cada fibra hasta el fallo total.</p>
                    </details>
                </div>
            </div>
        </div>
    `;
    return { title: 'Miércoles: Pecho y Tríceps', content: contenido };
}


function cargarContenidoModalRutinaDia4Sem2() {
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

function cargarContenidoModalRutinaDia5Sem2() {
    const contenido = `
        <div class="rutina-vintage">
            <div class="grupo-muscular">
                <h4>CALENTAMIENTO</h4>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5sem2-ej1" onchange="tacharEjercicio('dia5sem2-ej1')" />
                    <label for="dia5sem2-ej1"><strong>Face Pulls (Jalones a la Cara)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'face_pulls.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Espalda superior, cintura escapular y preparación general del hombro.</p>
                    <p><strong>Series:</strong> 2 series submáximas</p>
                    <p><strong>Reps:</strong> Controladas, según sensaciones.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Movimiento deliberado, manteniendo tensión constante.</li>
                        <li>No busques agotamiento total, solo calentamiento efectivo.</li>
                    </ul>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5sem2-ej2" onchange="tacharEjercicio('dia5sem2-ej2')" />
                    <label for="dia5sem2-ej2"><strong>Chin-Up (Dominada Supinada)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'chin_up.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Series:</strong> 2 (isométrica + dinámica)</p>
                    <p><strong>Beneficios clave:</strong></p>
                    <ul>
                        <li>Calienta todo el bíceps con estímulo completo.</li>
                        <li>Mejora rango de movilidad activa bajo carga.</li>
                    </ul>
                </details>
            </div>
            <br>
            <div class="grupo-muscular">
                <h4>EJERCICIOS PRINCIPALES</h4>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5sem2-ej3" onchange="tacharEjercicio('dia5sem2-ej3')" />
                    <label for="dia5sem2-ej3"><strong>Barbell Rows (Remo con Barra)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'barbell_rows.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Espalda media, dorsales, romboides, trapecios y erectores espinales.</p>
                    <p><strong>Series:</strong> 2-3 series</p>
                    <p><strong>Reps:</strong> 6-8 repeticiones al fallo técnico.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Usa cargas pesadas, buscando el fallo técnico en cada serie.</li>
                        <li>Opción con apoyo en banco si tienes molestias en espalda baja.</li>
                    </ul>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5sem2-ej4" onchange="tacharEjercicio('dia5sem2-ej4')" />
                    <label for="dia5sem2-ej4"><strong>Wide Grip Pulldowns (+ Parciales)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'wide_grip_pulldowns.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Redondo mayor y dorsales (agarre amplio).</p>
                    <p><strong>Series:</strong> 2-3 series</p>
                    <p><strong>Reps:</strong> 10-12 completas, más parciales hasta fallo adicional 🔥.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Usa barra con agarre ancho, manos colocadas en la zona inferior de la pendiente.</li>
                        <li>Al fallar, realiza repeticiones parciales en la parte superior.</li>
                    </ul>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5sem2-ej5" onchange="tacharEjercicio('dia5sem2-ej5')" />
                    <label for="dia5sem2-ej5"><strong>DB High Pulls (Jalón Alto con Mancuernas)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'db_high_pulls.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Deltoides posteriores, trapecios y espalda superior.</p>
                    <p><strong>Series:</strong> 2-3 series</p>
                    <p><strong>Reps:</strong> 8-10 en buena técnica hasta el fallo técnico 🔥.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Mantén muñecas arriba y codos abajo, diferenciándolo del remo erguido.</li>
                        <li>Detén la serie cuando la forma comience a deteriorarse.</li>
                    </ul>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5sem2-ej6" onchange="tacharEjercicio('dia5sem2-ej6')" />
                    <label for="dia5sem2-ej6"><strong>High Cable Row Ladder (Remo con Cable Alto en Escalera)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'high_cable_row_ladder.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Dorsales con énfasis en estiramiento máximo.</p>
                    <p><strong>Series:</strong> 1 serie por brazo</p>
                    <p><strong>Reps:</strong> Al fallo absoluto con escalera progresiva 🔥.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Realiza con cada brazo por separado una serie hasta el fallo.</li>
                        <li>Cada repetición: Completa 1 rep + media repetición adicional, aplicando escalera de retención en estiramiento (1 seg, 2 seg, etc.).</li>
                    </ul>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5sem2-ej7" onchange="tacharEjercicio('dia5sem2-ej7')" />
                    <label for="dia5sem2-ej7"><strong>Inverted Rows (Remo Invertido con Peso Corporal)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Back', 'inverted_rows.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Parte trabajada:</strong> Similar a dominadas pero más accesible.</p>
                    <p><strong>Series:</strong> 1 serie hasta fallo + parciales finales.</p>
                    <p><strong>Reps:</strong> Al fallo absoluto 🔥🔥.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Serie única al fallo con tantas repeticiones como puedas.</li>
                        <li>Añade repeticiones parciales al final hasta el agotamiento muscular total.</li>
                    </ul>
                </details>
            </div>
            <div class="grupo-muscular">
                <br>
                <h4>HOMBROS</h4>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5sem2-ej8" onchange="tacharEjercicio('dia5sem2-ej8')" />
                    <label for="dia5sem2-ej8"><strong>Cruz de Hierro (Iron Cross Finisher)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Shoulder', 'iron_cross.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Series:</strong> 3 sets al fallo 🔥🔥.</p>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5sem2-ej9" onchange="tacharEjercicio('dia5sem2-ej9')" />
                    <label for="dia5sem2-ej9"><strong>Press hacia Afuera</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Shoulder', 'press_hacia_afuera.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Series:</strong> Al fallo 🔥🔥.</p>
                    <p><strong>Beneficios:</strong></p>
                    <ul>
                        <li>Combina isométrico frontal y lateral.</li>
                        <li>Agota por completo deltoides anterior y medial.</li>
                        <li>Ideal para finalizar la rutina con máxima fatiga.</li>
                    </ul>
                </details>
            </div>
            <div class="grupo-muscular">
                <h4>BÍCEPS</h4>
                <br>
                <blockquote>
                    <p><strong>Objetivo:</strong> Rutina brutal enfocada en tensión excéntrica y carga progresiva. Ideal para complementar un día liviano de espalda o como estímulo final en una semana intensa.</p>
                </blockquote>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5sem2-ej10" onchange="tacharEjercicio('dia5sem2-ej10')" />
                    <label for="dia5sem2-ej10"><strong>Strict Curl + Cheat Curl (Serie Descendente)</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Biceps', 'strict_curl.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Zonas trabajadas:</strong> Cabeza corta (en el estricto), cabeza larga y braquial (con trampa).</p>
                    <p><strong>Series:</strong> 2-3 sets al fallo estricto 🔥 + 2-3 reps cheat.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li><strong>Strict Curl:</strong> Contra la pared, sin impulso, supinación total.</li>
                        <li><strong>Cheat Curl:</strong> Alejado de la pared, con leve balanceo y bajada lenta.</li>
                    </ul>
                    <p><strong>Beneficios:</strong></p>
                    <ul>
                        <li>Aislamiento total seguido de sobrecarga excéntrica.</li>
                        <li>Alta eficacia para hipertrofia.</li>
                        <li>Combinación brutal de control y esfuerzo final.</li>
                    </ul>
                </details>
                <br>
                <div class="ejercicio">
                    <input type="checkbox" id="dia5sem2-ej11" onchange="tacharEjercicio('dia5sem2-ej11')" />
                    <label for="dia5sem2-ej11"><strong>Drag Curl con Mancuerna</strong></label>
                </div>
                <details>
                    <summary>Detalles</summary>
                    <p>Video:</p>
                    <video controls width="320" height="240">
                        <source src="${get_videos_path('Biceps', 'drag_curl.mp4')}" type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                    <p><strong>Zonas trabajadas:</strong> Cabeza larga.</p>
                    <p><strong>Series:</strong> 3</p>
                    <p><strong>Reps:</strong> 8-10 repeticiones.</p>
                    <p><strong>Ejecución:</strong></p>
                    <ul>
                        <li>Mismo patrón del drag curl: codos atrás, mancuerna pegada al cuerpo.</li>
                    </ul>
                    <p><strong>Beneficios:</strong></p>
                    <ul>
                        <li>Excelente para enfatizar el “pico” del bíceps.</li>
                        <li>Menor estrés en la articulación del hombro.</li>
                        <li>Tensión mantenida durante todo el movimiento.</li>
                    </ul>
                </details>
            </div>
        </div>
    `;
    return { title: 'Viernes: Espalda y Bíceps', content: contenido };
}